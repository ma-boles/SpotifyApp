import "../styles/Search.css";
import React from "react";
import { Link } from "react-router-dom";

export default function MobileSearch() {
    return (
        <>
        <div className="search--line">
            <input className="search--line--input" placeholder="What do you want to listen to?">
            </input>
            <Link to="../Search">
                <button className="button--search">Cancel</button>
            </Link>
        </div>
            <div className="info--mobileSearch">
        <h3 className="h3--mobileSearch">Play what you love</h3>
        <p className="p--mobileSearch">Search for artists, songs, playlists, podcasts, or audiobooks.</p>
        </div>
        </>
    )
} 