import { useEffect } from 'react';

export default function Authentication({ onTokenObtained }) {

    useEffect(() => {

        const authenticateUrl = "http://localhost:3001/login";

        //redirect the user to the Spotify login
        window.location.href = authenticateUrl;
    }, []);

    return null;//no display
}