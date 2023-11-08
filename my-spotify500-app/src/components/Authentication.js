import { useEffect } from 'react';

export default function Authentication({ onTokenObtained }) {

    useEffect(() => {

        const tokenUrl = "http://localhost:3001/authenticate";

        //POST request to get access token 
        fetch(tokenUrl, {
            method: 'POST',
        })
        .then((response) => response.json())
        .then((data) => {
            const token = data.token;
            onTokenObtained(token); //passes token to parent component
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }, [onTokenObtained]);

    return null;//no display
}

