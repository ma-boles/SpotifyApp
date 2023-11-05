import { useState, useEffect } from "react";

export default function usePodcastData (podcastId) {
    const [ podcastData, setPodcastData ] = useState(null);

    useEffect(() => {
        fetch(`/api/podcast/${podcastId}`)
            .then((response) => response.json())
            .then((data) => setPodcastData(data))
            .catch((error) > console.error(error));
    }, [podcastId]);

    return podcastData;
}