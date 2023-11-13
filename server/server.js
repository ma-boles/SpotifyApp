import express from 'express';
import cors from 'cors';
import { default as fetch } from 'node-fetch';
import { CLIENT_ID, CLIENT_SECRET } from './config.js'

const app = express();
const port = process.env.PORT || 3001;
const redirectUri = 'https://your-redirect-uri/callback';

app.use(cors()); //enable CORS for all routes
app.use(express.json()); //parse json request bodies

app.get('/login', (req, res) => {
    const scope = 'user-read-playback-state user-modify-playback-state'; //include necessary scopes
    const state = generateRandomString(16);
    const authorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
    res.redirect(authorizeUrl);
});

app.get('/callback', async (req, res) => {
    const { code, state } = req.query;

    //verify state to prevent csrf attacks

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length],"");
}

const codeVerifier = generateRandomString(64);
 
const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);


/*'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),

.then(response => response.json())
.then(data => {
    const token = data.access_token;
    res.json({ token }); //send token as response 
})
.catch((error) => {
    console.log('Error:', error);
    res.status(500).json({ error: 'Authentication failed' });
});
});







// authentication 
app.post('/authenticate', (req, res) => {
    
    /* CLIENT_ID = config.CLIENT_ID;
     CLIENT_SECRET = config.CLIENT_SECRET;*/

     /*const tokenUrl = "https://accounts.spotify.com/api/token";*/

     //headers for POST request
    /* const headers = {
         'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
         'Content-Type': 'application/x-www-form-urlencoded'
     };*/
 
     //request body
    /* const body = 'grant_type=client_credentials';*/
 
     //POST request to get access token 
    /* fetch(tokenUrl, {
         method: 'POST',
         headers,
         body
     })
     .then(response => {
         if(response.ok) {
             return response.json();
         } else {
             throw new Error('Failed to obtain access token');
         }
     }) 
     .then(data => {
         const token = data.access_token;
         res.json({ token });
     })
     .catch(error => {
         console.error('Error:', error);
         res.status(400).json({ error: 'Authentication failed' });    
     })
       
 });
 
 app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });
 
 */