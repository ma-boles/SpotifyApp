import React from "react";
import { Link } from "react-router-dom";
import "../styles/Search.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";

import Album from "../components/Album"

export default function Search() {

    return (
        <>
        <section className="search">

            <div className="search--mobile--div">
                <h2 className="search--mobile--h2">Search</h2>
                   <Link to="../MobileSearch" className="link--mobileSearch">
                        <button className="search--mobile--input">
                        "What do you want to listen to?
                        </button>
                    </Link>
          </div>
            <nav className="search--nav">
                    <img src={left} className='search--arrowLeft'></img>
                    <img src={right} className='search--arrowRight'></img>
                    <input className="search--input" placeholder="What do you want to listen to?">
                        </input>
                </nav>
            <div className="search--header" >
                
            </div>
            <div className="search--recent">
                <h2 className="search--h2">Recent searches</h2>
                <p className="search--p">See All</p>
            </div>
            <aside className="search--card">
                <Album />
                <Album />
                <Album />
                
            </aside>
            <div className="search--browse">
                <h2 className="search--h2browse">Browse all</h2>
            </div>
            <aside className="search--card">
                <Album />
                <Album />
                <Album />
                
            </aside>
            <hr></hr>

        </section>

        </>
    )
}