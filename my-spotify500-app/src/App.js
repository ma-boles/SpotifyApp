import '../src/styles/App.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

/*import Authentication from './components/Authentication';*/
import Top500 from "./500pages/Top500";
import Decade from "../src/pages/Decade";
import Genre from "../src/pages/Genre";
import Podcasts from "../src/pages/Podcasts";
import HomePage from './pages/HomePage';
import Search from './pages/Search';
/*import LoginPage from './pages/LoginPage';*/
import MobileSearch from './pages/MobileSearch';

import Top5002 from './500pages/Top5002';
/*import Top5003 from './500pages/Top5003';
import Top5004 from './500pages/Top5004';
import Top5005 from './500pages/Top5005';
import Top5006 from './500pages/Top5006';
import Top5007 from './500pages/Top5007';
import Top5008 from './500pages/Top5008';
import Top5009 from './500pages/Top5009';
import Top50010 from './500pages/Top50010';
import Top50011 from './500pages/Top50011';
import Top50012 from './500pages/Top50012';
import Top50013 from './500pages/Top50013';
import Top50014 from './500pages/Top50014';
import Top50015 from './500pages/Top50015';
import Top50016 from './500pages/Top50016';
import Top50017 from './500pages/Top50017';
import Top50018 from './500pages/Top50018';
import Top50019 from './500pages/Top50019';
import Top50020 from './500pages/Top50020';
import Top50021 from './500pages/Top50021';
import Top50022 from './500pages/Top50022';
import Top50023 from './500pages/Top50023';
import Top50024 from './500pages/Top50024';
import Top50025 from './500pages/Top50025';*/

import MusicPlayer from './components/Music-player';
import Nav from './components/Nav';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';


/*import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg"*/
/*import album from "../images/album-placeholder.png";*/

export default function App() {

  /*const [ accessToken, setAccessToken ] = useState('initial_access_token');

  const handleTokenObtained = (token) => 
  setAccessToken(token);*/


  return (
    <>
    {/* access token */}
    {/*<Authentication onTokenObtained={handleTokenObtained}/>*/}
    
    <div className="App">

          <Nav />
      
      <div className='home--container'>
        {/* new page loads */}
          <Routes>
          {/* example: <HomePage accessToken={accessToken} /> */}
            <Route path='/' element={<HomePage  /*accessToken={accessToken}*//>} />
            <Route path='/Decade' element={<Decade />} />
            <Route path='/Top500' element={<Top500 />} />
            <Route path='/Genre' element={<Genre />} />
            <Route path='/Podcasts' element={<Podcasts />} />
            <Route path='/Search' element={<Search />}/>
         {/*<Route path='/LoginPage' element={<LoginPage />} />*/}
            <Route path='/MobileSearch' element={<MobileSearch/>}/>

            {/*<Route path='/Top5002' element={<Top5002 />}/>
            <Route path='/Top5003' element={<Top5003 />}/>
            <Route path='/Top5004' element={<Top5004 />}/>
            <Route path='/Top5005' element={<Top5005 />}/>
            <Route path='/Top5006' element={<Top5006 />}/>
            <Route path='/Top5007' element={<Top5007 />}/>
            <Route path='/Top5008' element={<Top5008 />}/>
            <Route path='/Top5009' element={<Top5009 />}/>
            <Route path='/Top50010' element={<Top50010 />}/>
            <Route path='/Top50011' element={<Top50011 />}/>
            <Route path='/Top50012' element={<Top50012 />}/>
            <Route path='/Top50013' element={<Top50013 />}/>
            <Route path='/Top50014' element={<Top50014 />}/>
            <Route path='/Top50015' element={<Top50015 />}/>
            <Route path='/Top50016' element={<Top50016 />}/>
            <Route path='/Top50017' element={<Top50017 />}/>
            <Route path='/Top50018' element={<Top50018 />}/>
            <Route path='/Top50019' element={<Top50019 />}/>
            <Route path='/Top50020' element={<Top50020 />}/>
            <Route path='/Top50021' element={<Top50021 />}/>
            <Route path='/Top50022' element={<Top50022 />}/>
            <Route path='/Top50023' element={<Top50023 />}/>
            <Route path='/Top50024' element={<Top50024 />}/>
  <Route path='/Top50025' element={<Top50025 />}/>*/}

          </Routes>

          <Footer />

      </div>
      <NowPlaying />

    </div>

      <MusicPlayer />
    </>
    );
  }

