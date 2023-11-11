import { useState, useEffect } from "react";

export function usePodcastFetcher ( accessToken, podcastIds ) {

    const [ podcastData, setPodcastData ] = useState([]);

    useEffect(() => {

        const fetchDataForPodcast = async (podcastId) => {
            try {
                const response = await fetch (`https://api.spotify.com/v1/shows/${podcastId}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if(response.status === 200) {
                    const data = await response.json();
                    setPodcastData((prevData) => [
                        ...prevData, {
                            id: podcastId,
                            data
                        }
                    ]);
                } else {
                    console.error('Error fetching podcast data for ', podcastId);
                    setPodcastData((prevData) => [
                        ...prevData, {
                            id: podcastId,
                            data: null
                        }
                    ]);
                }
            } catch (error) {
                console.error('Error:', error);
                setPodcastData((prevData) => [
                    ...prevData, {
                        id: podcastId,
                        data: null
                    }
                ]);
            }
        };
        
        const fetchDataForAllPodcasts = async () => {
            try {
                await Promise.all(podcastIds.map((podcastId) => fetchDataForPodcast(podcastId)));
            } catch (error) {
                console.error('Error fetching podcat data:', error);
            }
        };

        if(podcastIds.length > 0) {
            fetchDataForAllPodcasts();
        }
}, [accessToken, podcastIds]);

    return podcastData;
}



/*
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
    }, [ accessToken, podcastIds ])

return podcastData;

if(response.status === 200) {
    const data = await response.json();
    setPodcastData((prevData) => ({
        ...prevData,
        [podcastId]:data,
    }));
} else {
    console.error('Error fetching podcast data for ', podcastId);
    setPodcastData((prevData) => ({
        ...prevData,
        [podcastId]: null,
    }));
}
} catch (error) {
console.error('Error:', error);
setPodcastData((prevData) => ({
    ...prevData,
    [podcastId]: null,
}));
}
};

   podcastIds.forEach((podcastId) => {
            fetchDataForPodcast(podcastId);
        });
}, [accessToken, podcastIds]);

    return podcastData;
}*/