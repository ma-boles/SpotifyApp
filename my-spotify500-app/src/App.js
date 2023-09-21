import '../src/styles/App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Top500 from "../src/pages/Top500";
import Decade from "../src/pages/Decade";
import Genre from "../src/pages/Genre";
import Podcasts from "../src/pages/Podcasts";

/*import './Music-player.css';*/
import Carousel from './components/Carousel';
import Album from './components/Album';
import MusicPlayer from './components/Music-player';

import home from "./images/house-solid.svg";
import search from "./images/magnifying-glass-solid.svg";
import library from "./images/radio-solid.svg";
import genre from "./images/music-solid.svg";
import decade from "./images/calendar-solid.svg";
import artist from "./images/user-regular.svg";
import close from "./images/xmark-solid.svg";
import img from "./images/600px-Placeholder.png";
/*import right from "./images/chevron-right-solid.svg";
import left from "./images/chevron-left-solid.svg"*/
import podcast from "./images/podcast-solid.svg";
/*import album from "./images/album-placeholder.png";*/
import placeholder from "./images/600px-Placeholder.png";
import upDown from "./images/chevron-up-solid.svg";
import plus from "./images/circle-plus-solid.svg";
import picNpic from "./images/picNpic.png";
import back from "./images/backward-step-solid.svg";
/*import pause from "./images/circle-pause-solid.svg";*/
import play from "./images/circle-play-solid.svg";
import forward from "./images/forward-step-solid.svg";
import arrowRotateBack from "./images/arrow-rotate-left-solid.svg";
import arrowRotateForward from "./images/arrow-rotate-right-solid.svg";
import nowPlayingView from "./images/square-caret-right-regular.svg";
import queue from "./images/layer-group-solid.svg";
import device from "./images/mobile-screen-button-solid.svg";
import volume1 from "./images/volume-xmark-solid.svg";
/*import volume2 from "./images/volume-low-solid.svg";
import volume3 from "./images/volume-high-solid.svg";*/
import full from "./images/up-right-and-down-left-from-center-solid.svg"





function App() {

  function closeWindow() {
    var nowPlay = document.getElementById("nowPlaying");

    if(nowPlay.style.display === "block") {
    nowPlay.style.display = "none"
    } else {
    nowPlay.style.display = "block"
  }
    
}



const slides = [{/* 
      { url: "C:\Users\USER\Personal Portfolio\my-spotify-app\src\images\carousel-neon.jpg",
        title: "neon" },
      { url: "C:\Users\USER\Personal Portfolio\my-spotify-app\src\images\carousel-shop.jpg",
        title: "shop" },
      { url: "C:\Users\USER\Personal Portfolio\my-spotify-app\src\images\carousel-studio.jpg",
          title: "studio"},
      { url:"C:\Users\USER\Personal Portfolio\my-spotify-app\src\images\carousel-noMusic.jpg",
        title: "noMusic"},
      { url: "C:\Users\USER\Personal Portfolio\my-spotify-app\src\images\carousel-walkman.jpg",
          title: "walkman"}, */}
]

  return (
    <>
    <div className="App">
    <div className='home--container'>

        {/* STATIC NAV SIDEBAR */}
        <div>
            <ul className='ul--top'>
                <div className='line--item'>
                  <img src={home} className='img--icon' alt='home'></img><li>Home</li>
                </div>

                <div className='line--item'>
                  <img src={search} className='img--icon' alt='search'></img><li>Search</li>
                </div>
            </ul>
            
            <ul className='ul--bottom'>
                <div className='line--item'>
                  <Link to="/pages/Top500">
                    <img src={library} className='img--icon' alt='Top 500'></img><li>Top 500</li>
                  </Link>
                </div>

                <div className='line--item'>
                  <Link to="/Genre">
                    <img src={genre} className='img--icon' alt='genre'></img><li>Genre</li>
                  </Link>  
                </div>

                <div className='line--item'>
                  <Link to="/Decade">
                    <img src={decade} className='img--icon' alt='decade'></img><li>Decade</li>
                  </Link>
                </div>

                <div className='line--item'>
                  <img src={artist} className='img--icon' alt='artist'></img><li>Artist</li>
                </div>

                <div className='line--item'>
                  <Link to="/Podcasts"> 
                    <img src={podcast} className='img--icon' alt='podcast'></img><li>Podcast</li>
                  </Link>  
                </div>
            </ul>
      
        </div>
      </div>

    {/* HOME -- MIDDLE SECTION */}

      <div className='homePage'>
        <div className="home">
        
         <Carousel slides={slides}/>

        </div>

          <h1 className="h1--home">Top 10</h1>

          <div className="top10">
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
          </div>

            </div>

                  {/* NOW PLAYING POPUP */}
                      <div className='nowPlaying' id='nowPlaying'>
                        <div className='nowPlaying--top'>
                          <h3 className='h3--nowPlaying'>Album Name - Artist Name</h3>
                          <button className='button--close' onClick={closeWindow}><img src={close} className='img--close' alt='close'></img></button>
                        </div>
                        <img src={img} className='placeholder' alt='album'></img>

                        </div>

      <header className="App-header">
     </header>

      <MusicPlayer />

    </div>
    </>
    );
  }
  export default App;

  
     