/*import '../src/styles/App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Top500 from "../src/pages/Top500";
import Decade from "../src/pages/Decade";
import Genre from "../src/pages/Genre";
import Podcasts from "../src/pages/Podcasts";
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import Login from './pages/Login';

import MusicPlayer from './components/Music-player';
import Nav from './components/Nav';
import NowPlaying from './components/NowPlaying';


/*import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg"*/
/*import album from "../images/album-placeholder.png";*/


/*export default function App() {
  return (
    <>
    <div className="App">

          <Nav />
      
      <div className='home--container'>
        {/* new page loads *//*}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Decade' element={<Decade />} />
            <Route path='/Top500' element={<Top500 />} />
            <Route path='/Genre' element={<Genre />} />
            <Route path='/Podcasts' element={<Podcasts />} />
            <Route path='/Search' element={<Search />}/>
            <Route path='/Login' element={<Login />} />
          </Routes>
      </div>
      <NowPlaying />

    </div>

    <section className='musicPlayer'>
      <MusicPlayer />
    </section>
    </>
    );
  }

   */
import React from "react";
import Login from "./components/Login";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginCard from "./components/LoginCard";


export default function App() {
    return(
        <>
{            /*<Login />*/
}            <LoginCard />
        </>
    )
}