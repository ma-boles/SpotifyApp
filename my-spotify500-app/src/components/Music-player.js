import "../styles/Music-player.css";

export default function MusicPlayer () {
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