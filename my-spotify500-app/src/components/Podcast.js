import React from "react";
import "../styles/Albums.css";


export default function Podcast( podcastData ) {
    return(
        <>
            <div className="card--album">
                <img style={styles} src={podcastData.images[0].url} alt={podcastDataData.name} className="album--cover" ></img>
                <div className="album--info">
                    <h2 className="album--h2">{podcastData.name}</h2>
                    <h3 className="album--h3">{podcastData.publisher[0]}</h3>
                </div>
            </div>
        </>
    )
}