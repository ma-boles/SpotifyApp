import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css"

import home from "../images/house-solid.svg";
import search from "../images/magnifying-glass-solid.svg";
import library from "../images/radio-solid.svg";
import genre from "../images/music-solid.svg";
import decade from "../images/calendar-solid.svg";
import artist from "../images/user-regular.svg";
import podcast from "../images/podcast-solid.svg";


export default function Nav() {
    return(
        <>
         {/* STATIC NAV SIDEBAR */}
         <side className="side">
            <nav>
                <ul className='ul--top'>

                    <div className='line--item'>
                        <Link to="/" >
                            <img src={home} className='img--icon' alt='home'></img><li>Home</li>
                         </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Search">
                    <img src={search} className='img--icon' alt='search'></img><li>Search</li>
                        </Link>
                    </div>
                </ul>
                
                <ul className='ul--bottom'>

                    <div className='line--item'>
                        <Link to="./Top500">
                            <img src={library} className='img--icon' alt='Top 500'></img><li>Top 500</li>
                        </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Genre">
                            <img src={genre} className='img--icon' alt='genre'></img><li>Genre</li>
                        </Link>  
                    </div>

                    <div className='line--item'>
                        <Link to="./Decade">
                            <img src={decade} className='img--icon' alt='decade'></img><li>Decade</li>
                        </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Login">
                    <img src={artist} className='img--icon' alt='artist'></img><li>Artist</li>
                        </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Podcasts"> 
                            <img src={podcast} className='img--icon' alt='podcast'></img><li>Podcast</li>
                        </Link>  
                    </div>
                </ul>
        
            </nav>
        </side>
     </>
    )
}