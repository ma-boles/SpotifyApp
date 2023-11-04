import React from "react";
import "../styles/Albums.css";


export default function Podcast() {
    return(
        <>
            <div className="card--album">
                <img style={styles} src={showData.images[0].url} alt={showData.name} className="album--cover" ></img>
                <div className="album--info">
                    <h2 className="album--h2">{showData.name}</h2>
                    <h3 className="album--h3">{showData.publisher[0]}</h3>
                </div>
            </div>
        </>
    )
}