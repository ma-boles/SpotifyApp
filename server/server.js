import express from 'express';
import cors from 'cors';
import { default as fetch } from 'node-fetch';
import { CLIENT_ID, CLIENT_SECRET } from './config.js'

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); //enable CORS for all routes
app.use(express.json()); //parse json request bodies

// authentication 
app.post('/authenticate', (req, res) => {
    
    /* CLIENT_ID = config.CLIENT_ID;
     CLIENT_SECRET = config.CLIENT_SECRET;*/

    const tokenUrl = "https://accounts.spotify.com/api/token";

    //headers for POST request
    const headers = {
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    //request body
    const body = 'grant_type=client_credentials';

    //POST request to get access token 
    fetch(tokenUrl, {
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
});*/