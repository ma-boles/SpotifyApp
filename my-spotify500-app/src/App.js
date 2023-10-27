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
/*import LoginPage from './pages/LoginPage';*/
import MobileSearch from './pages/MobileSearch';

import Top5002 from './pages/Top5002';
import Top5003 from './pages/Top5003';
import Top5004 from './pages/Top5004';
import Top5005 from './pages/Top5005';
import Top5006 from './pages/Top5006';
import Top5007 from './pages/Top5007';
import Top5008 from './pages/Top5008';
import Top5009 from './pages/Top5009';
import Top50010 from './pages/Top50010';


import MusicPlayer from './components/Music-player';
import Nav from './components/Nav';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';


/*import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg"*/
/*import album from "../images/album-placeholder.png";*/

export default function App() {

  const [ accessToken, setAccessToken ] = useState('initil_access_token');

  /*const refreshAccessToken = async () => {


  }*/
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

            <Route path='/Top5002' element={<Top5002 />}/>
            <Route path='/Top5003' element={<Top5003 />}/>
            <Route path='/Top5004' element={<Top5004 />}/>
            <Route path='/Top5005' element={<Top5005 />}/>
            <Route path='/Top5006' element={<Top5006 />}/>
            <Route path='/Top5007' element={<Top5007 />}/>
            <Route path='/Top5008' element={<Top5008 />}/>
            <Route path='/Top5009' element={<Top5009 />}/>
            <Route path='/Top50010' element={<Top50010 />}/>
          </Routes>

          <Footer />

      </div>
      <NowPlaying />

    </div>

      <MusicPlayer />
    </>
    );
  }

