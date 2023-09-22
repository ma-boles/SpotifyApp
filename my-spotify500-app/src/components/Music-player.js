import "../styles/Music-player.css";

import placeholder from "../images/600px-Placeholder.png";
import upDown from "../images/chevron-up-solid.svg";
import plus from "../images/circle-plus-solid.svg";
import picNpic from "../images/picNpic.png";
import arrowRotateBack from "../images/arrow-rotate-left-solid.svg";
import back from "../images/backward-step-solid.svg";
import play from "../images/circle-play-solid.svg";
import forward from "../images/forward-step-solid.svg";
import arrowRotateForward from "../images/arrow-rotate-right-solid.svg";
import nowPlayingView from "../images/square-caret-right-regular.svg";
import queue from "../images/layer-group-solid.svg";
import device from "../images/mobile-screen-button-solid.svg";
import volume1 from "../images/volume-xmark-solid.svg";
import full from "../images/up-right-and-down-left-from-center-solid.svg"
/*import pause from "../images/circle-pause-solid.svg";*/
/*import volume2 from "../images/volume-low-solid.svg";
import volume3 from "../images/volume-high-solid.svg";*/

export default function MusicPlayer () {

    function nowPlayViewToggle () {

        var arrow = document.getElementById("up-down");
  
        if(arrow.style.transform === "none") {
        arrow.style.transform = "rotate(180deg)"
        } else {
        arrow.style.transform = "none"
      }
  
        var nowPlay = document.getElementById("nowPlaying");
  
        if(nowPlay.style.display === "none") {
        nowPlay.style.display = "block"
        } else {
        nowPlay.style.display = "none"
        }
      }

    return (
        <>
        <section className="musicPlayer">

            <aside className="info--album">
                <img src={placeholder} className="placeholder-2" alt='album'></img>
                <img src={upDown} onClick={nowPlayViewToggle} className="up-down" id="up-down" alt='arrow'></img>
                <div className="info--album2">
                    <h3 className="h3--info--album">Track Title</h3>
                    <p className="p--info--album">Album Title</p>
                </div>
                <button className="button--plus"><img src={plus} className="plus" alt='add'></img></button>
                <button className="button--pic"><img src={picNpic} className="picNpic" alt='small view'></img></button>

            </aside>

            <aside className="player">
                <button className="button--player1"><img src={arrowRotateBack} className="arrowRotateBack" alt='arrow'></img></button>
                <button className="button--player2"><img src={back} className="back" alt='back'></img></button>
                {/*<button className="button--player3"><img src={pause} className="pause"></img></button>*/}
                <button className="button--player4"><img src={play} className="play" alt='play'></img></button>
                <button className="button--player5"><img src={forward} className="forward" alt='skip'></img></button>
                <button className="button--player6"><img src={arrowRotateForward} className="arrowRotateForward" alt='rewind'></img></button>
                
             </aside>

            <aside className="info--right">
                <button className="button--r-player1"><img src={nowPlayingView} /*onClick={toggle5} */className="player--right1" id="player--right1" alt='now playing'></img></button>
                <button className="button--r-player2"><img src={queue} className="player--right2" alt='queue'></img></button>
                <button className="button--r-player3"><img src={device} className="player--right3" alt='device'></img></button>
                <button className="button--r-player4"><img src={volume1} className="player--right4" alt='volume'></img></button>
                {/*<button className="button--r-player4"><img src={volume2} className="player--right4"></img></button>
                <button className="button--r-player4"><img src={volume3} className="player--right4"></img></button>*/}

                {/*volume slider */}
                <button className="button--r-player5"><img src={full} className="player--right5" alt='loudest'></img></button>
            </aside>

        </section>
      </>
    )
}