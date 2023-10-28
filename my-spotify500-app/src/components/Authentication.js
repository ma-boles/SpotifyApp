import React, { useEffect } from 'react';

export default function Authentication({ onTokenObtained }) {

    useEffect(() => {
        const CLIENT_ID = '';
        const CLIENT_SECRET = '';

        const tokenUrl = "http://localhost:3001/authenticate";

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
            const token = data.token;
            onTokenObtained(token); //passes token to parent component
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }, [onTokenObtained]);

    return null;//no display
}