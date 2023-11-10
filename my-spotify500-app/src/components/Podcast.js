import React from "react";
import "../styles/Albums.css";


export default function Podcast({ podcastData }){
    if(!podcastData || !podcastData.images || podcastData.images.length === 0) { // handles the case where podcastData or images are not defined or empty
        return null;
    }
    return(
        <>
            <div className="card--album">
                <img src={podcastData.images[0].url} alt={podcastData.name} className="album--cover" ></img>
                <div className="album--info">
                    <h2 className="album--h2">{podcastData.name}</h2>
                    {podcastData.publisher[0] && (
                        <h3 className="album--h3">{podcastData.publisher[0]}</h3>
                    )}
                    
                </div>
            </div>
        </>
    );
}