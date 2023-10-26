const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); //parse json request bodies

app.post('/authenticate', (req, res) => {
    const CLIENT_ID = '';
    const CLIENT_SECRET = '';

    const tokenUrl = "https://accounts.spotify.com/api/token";

    //headers for POST request
    const headers = {
        'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});