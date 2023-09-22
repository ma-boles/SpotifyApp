import '../src/styles/App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Top500 from "../src/pages/Top500";
import Decade from "../src/pages/Decade";
import Genre from "../src/pages/Genre";
import Podcasts from "../src/pages/Podcasts";
import HomePage from './pages/HomePage';

/*import './Music-player.css';*/
import Carousel from './components/Carousel';
import Album from './components/Album';
import MusicPlayer from './components/Music-player';
import Nav from './components/Nav';
import NowPlaying from './components/NowPlaying';


/*import right from "./images/chevron-right-solid.svg";
import left from "./images/chevron-left-solid.svg"*/
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





export default function App() {




  return (
    <>
    <div className="App">
      
          <Nav />
      

      <div className='home--container'>
        {/* new page loads */}
       <h1>Home Page</h1>
     
        </div>
 {/* NOW PLAYING POPUP */}
      <NowPlaying />


    {/* HOME -- MIDDLE SECTION */}

      

      

      {/*<header className="App-header">
     </header>*/}

      

    </div>
    <section className='musicPlayer'>
      <MusicPlayer />
    </section>
    </>
    );
  }
  