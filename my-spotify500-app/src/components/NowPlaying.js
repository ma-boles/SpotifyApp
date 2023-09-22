import React from "react"
import "../styles/App.css"

import close from "../images/xmark-solid.svg";
import img from "../images/600px-Placeholder.png";



export default function NowPlaying() {

    function closeWindow() {
        var nowPlay = document.getElementById("nowPlaying");
    
        if(nowPlay.style.display === "block") {
        nowPlay.style.display = "none"
        } else {
        nowPlay.style.display = "block"
      }
        
    }

    return (

    <div className='nowPlaying' id='nowPlaying'>
         <div className='nowPlaying--top'>
                <h3 className='h3--nowPlaying'>Album Name - Artist Name</h3>
                <button className='button--close' onClick={closeWindow}><img src={close} className='img--close' alt='close'></img></button>
         </div>
        <img src={img} className='placeholder' alt='album'></img>

    </div>

    )
}
    