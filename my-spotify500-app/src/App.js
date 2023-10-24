import '../src/styles/App.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import Authentication from './components/Authentication';
import Top500 from "../src/pages/Top500";
import Decade from "../src/pages/Decade";
import Genre from "../src/pages/Genre";
import Podcasts from "../src/pages/Podcasts";
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import LoginPage from './pages/LoginPage';
import MobileSearch from './pages/MobileSearch';

import Top500_2 from './pages/Top500_2';
import Top500_3 from './pages/Top500_3';
import Top500_4 from './pages/Top500_4';
import Top500_5 from './pages/Top500_5';
import Top500_6 from './pages/Top500_6';
import Top500_7 from './pages/Top500_7';
import Top500_8 from './pages/Top500_8';
import Top500_9 from './pages/Top500_9';
import Top500_10 from './pages/Top500_10';


import MusicPlayer from './components/Music-player';
import Nav from './components/Nav';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';


/*import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg"*/
/*import album from "../images/album-placeholder.png";*/

export default function App() {

  const [ accessToken, setAccessToken ] = useState('');

  const handleTokenObtained = (token) => 
  setAccessToken(token);


  return (
    <>
    {/* access token */}
    <Authentication onTokenObtained={handleTokenObtained}/>

    <div className="App">

          <Nav />
      
      <div className='home--container'>
        {/* new page loads */}
          <Routes>
          {/* example: <HomePage accessToken={accessToken} /> */}
            <Route path='/' element={<HomePage  accessToken={accessToken}/>} />
            <Route path='/Decade' element={<Decade />} />
            <Route path='/Top500' element={<Top500 />} />
            <Route path='/Genre' element={<Genre />} />
            <Route path='/Podcasts' element={<Podcasts />} />
            <Route path='/Search' element={<Search />}/>
         {/*<Route path='/LoginPage' element={<LoginPage />} />*/}
            <Route path='/MobileSearch' element={<MobileSearch/>}/>

            <Route path='/Top500_2' element={<Top500_2 />}/>
            <Route path='/Top500_3' element={<Top500_3 />}/>
            <Route path='/Top500_4' element={<Top500_4 />}/>
            <Route path='/Top500_5' element={<Top500_5 />}/>
            <Route path='/Top500_6' element={<Top500_6 />}/>
            <Route path='/Top500_7' element={<Top500_7 />}/>
            <Route path='/Top500_8' element={<Top500_8 />}/>
            <Route path='/Top500_9' element={<Top500_9 />}/>
            <Route path='/Top500_10' element={<Top500_10 />}/>
          </Routes>

          <Footer />

      </div>
      <NowPlaying />

    </div>

      <MusicPlayer />
    </>
    );
  }

