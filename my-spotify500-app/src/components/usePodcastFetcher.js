import { useState, useEffect } from "react";

export function usePodcastFetcher ({ accessToken, podcastId }) {

    const [ podcastData, setPodcastData ] = useState([]);

    useEffect(() => {

        const fetchPodcastData = async () => {
            try {
                const response = await fetch (`https://api.spotify.com/v1/shows/${podcastId}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if(response.status === 200) {
                    const data = await response.json();
                    setPodcastData(data); // update the state with fetched data
                } else {
                    console.error('Error fetching podcast data');
                    setPodcastData(null); // handle the error by ipdating the state to apprpriate value
                }
            } catch(error) {
                console.error('Error:', error);
                setPodcastData(null); // handle the error by ipdating the state to apprpriate value
            }

        };

        fetchPodcastData(); // call function to initiate the data fetching
    }, [ accessToken, podcastId ])

    return podcastData;
}

