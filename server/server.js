import express from 'express';
import cors from 'cors';
import { default as fetch } from 'node-fetch';
import { CLIENT_ID, CLIENT_SECRET } from './config.js';
import crypto from 'crypto';

const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const redirectUri = 'https://localhost:3001/callback';
const validStates = new Set();

const credentials = {
    key: fs.readFileSync(path.resolve(__dirname, '../localhost.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../localhost.crt')),
};

app.use(cors()); //enable CORS for all routes
app.use(express.json()); //parse json request bodies

app.get('/login', (req, res) => {
    const scope = 'user-read-playback-state user-modify-playback-state'; //include necessary scopes
    const state = generateRandomString(16);
    const codeVerifier = generateRandomString(64);
    const codeChallenge = generateCodeChallenge(codeVerifier);
    const authorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    res.redirect(authorizeUrl);
});

app.get('/callback', async (req, res) => {
    const { code, state } = req.query;

    //verify state to prevent csrf attacks
    if(!isValidState(state)) {
        return res.status(400).json({ error: 'Invalid state parameter'});
    }

    //exchange authorization code for access token
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    const headers = {
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    try {
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers,
            body,
        });

        if(!response.ok) {
            throw new Error('Failed to obtain access token');
        }

        const data = await response.json();
        const accessToken = data.access_token;

        //pass the access token to the client
        res.json({ accessToken });
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({ error: 'Authentication failed'});
    }
});

https.createServer(credentials, app).listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


//function to validate the state parameter
function isValidState(state) {
    //cheack if the received state is in the set
    return validStates.has(state);
}

//function to generate and store a new state
function generateAndStoreState() {
    const state = generateRandomString(16);
    validStates.add(state);
    return state;
}

//function to generate a random string
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.randomBytes(length);
    return Array.from(values, (byte) => possible[byte % possible.length]).join('');
}

function generateCodeChallenge(verifier) {
    const hashed = crypto.createHash('sha256').update(verifier).digest();
    return base64encode(hashed);
    
}

function base64encode(input) {
    return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/*app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/