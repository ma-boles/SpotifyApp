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
                            <img src={library} className='img--icon' alt='Top 500'></img><li id='top500'>Top 500</li>
                        </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Genre">
                            <img src={genre} className='img--icon'alt='genre'></img><li id='genre'>Genre</li>
                        </Link>  
                    </div>

                    <div className='line--item'>
                        <Link to="./Decade">
                            <img src={decade} className='img--icon'alt='decade'></img><li id='decade'>Decade</li>
                        </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Login">
                    <img src={artist} className='img--icon'alt='artist'></img><li id='artist'>Artist</li>
                        </Link>
                    </div>

                    <div className='line--item'>
                        <Link to="./Podcasts"> 
                            <img src={podcast} className='img--icon'alt='podcast'></img><li id='podcast'>Podcast</li>
                        </Link>  
                    </div>
                </ul>
        
            </nav>
        </side>
        <div className="mobile-nav--bottom">
            <ul className='ul--mobile--bottom'>

                <div className='mobile--line--item'>
                    <Link to="/" >
                        <button className="mobile--button">
                            <img src={home} className='mobile--img--icon' alt='home'></img>
                            <li className="mobile--li">Home</li>   
                        </button>
                    </Link>
                </div>

                <div className='mobile--line--item'>
                    <Link to="./Search">
                        <button className="mobile--button">
                            <img src={search} className='mobile--img--icon' alt='search'></img>
                            <li className="mobile--li">Search</li>
                        </button>
                    </Link>
                </div>
            </ul>
        </div>
     </>
    )
}