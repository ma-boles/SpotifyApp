import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Nav.css"

import home from "../images/house-solid.svg";
import search from "../images/magnifying-glass-solid.svg";
import library from "../images/radio-solid.svg";
import genre from "../images/music-solid.svg";
import decade from "../images/calendar-solid.svg";
import artist from "../images/user-regular.svg";
import podcast from "../images/podcast-solid.svg";
import album from "../images/AlbumCover.png";
import back from "../images/backward-step-solid.svg";
import play from "../images/circle-play-solid.svg";
import forward from "../images/forward-step-solid.svg";





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

        <div className="tablet--nav">
            <nav>
                <ul className='ul--tablet'>
                    <div className="nav--tablet--top">

                        <div className='line--tablet'>
                            <Link to="/" >
                                <img src={home} className='img--tablet' alt='home'></img><li className="home--tablet">Home</li>
                            </Link>
                        </div>

                        <div className='line--tablet'>
                            <Link to="./Search">
                        <img src={search} className='img--tablet' alt='search'></img><li className="search--tablet">Search</li>
                            </Link>
                        </div>

                        <div className='line--tablet'>
                            <Link to="./Top500">
                                <img src={library} className='img--tablet' alt='Top 500'></img><li id='top500--tablet'>Top 500</li>
                            </Link>
                        </div>

                        <div className='line--tablet'>
                            <Link to="./Genre">
                                <img src={genre} className='img--tablet'alt='genre'></img><li id='genre--tablet'>Genre</li>
                            </Link>  
                        </div>

                        <div className='line--tablet'>
                            <Link to="./Decade">
                                <img src={decade} className='img--tablet'alt='decade'></img><li id='decade--tablet'>Decade</li>
                            </Link>
                        </div>

                        <div className='line--tablet'>
                            <Link to="./Login">
                        <img src={artist} className='img--tablet'alt='artist'></img><li id='artist--tablet'>Artist</li>
                            </Link>
                        </div>

                        <div className='line--tablet'>
                            <Link to="./Podcasts"> 
                                <img src={podcast} className='img--tablet'alt='podcast'></img><li id='podcast--tablet'>Podcast</li>
                            </Link>  
                        </div>
                    </div>

                    <div className="nowPlaying--tablet">
                        <img src={album} id="album--tablet">
                        </img>
                        <h4 className="h4--tablet">Album Title</h4>
                        <p className="p--tablet">Artist Name</p>
                        <hr className="hr--tablet"/>
                        <div className="musicPlayer--tablet">
                            <img src={back} id="img--musicPlayer--tablet"></img>
                            <img src={play} id="img--musicPlayer--tablet"></img>
                            <img src={forward} id="img--musicPlayer--tablet"></img>

                        </div>
                </div>
                </ul>
            </nav>
        </div>


        <div className="mobile--nav--bottom">
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