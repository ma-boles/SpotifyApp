import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import Links from "../components/Links";*/
import AlbumDisplay from "../components/AlbumDisplay";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";



export default function Top500 ({ accessToken }) {

    const albumIds = [/*'2v6ANhWhZBUKkg6pJJBs3B', '2CNEkSE8TADXRT2AzcEt1b'/*, Joni Mitchell - Blue*//*, '6YUCc2RiXcEKS9ibuZxjt0','0ETFjACtuP2ADo6LFhL6HN', '2guirTSEqLizK7j9i1MTTZ', '1bt6q2SruMsBtcerNVtpZB', '7nXJ5k4XgRj5OLg9m8V3zc','4WD4pslu83FF6oMa1e19mF', '1BZoqf8Zje5nGdwZhOjAtD', */'3PRoXYsngSwjEQWR5PsHWR', '2ANVost0y2y52ema1E9xAZ', '5WndWfzGwCkHzAbQXVkg2V', '5U4dnRZsfW8NmwBBkELFPh', '1Rj1daFzMlYzLv7lJl14hz', '6FCzvataOZh68j8OKzOt9a', '20r762YmB5HeofjMCiPMLv', '6YabPKtZAjxwyWbuO9p4ZD', '7ycBtnsMtyVbbwTfJwRjSP', '6GjwtEZcfenmOf6l18N7T7']; //album ids from api
    const albumData = useAlbumFetcher({ accessToken, albumIds });

    return (
        <>
        <div className="top500--page">
            <div className="top500--header">
                <nav className="top500--nav">
                    <img src={left} className='top500--arrowLeft' alt="back"></img>
                    <img src={right} className='top500--arrowRight' alt="next"></img>
                </nav>
                
                <h1 className="h1--top500">
                    Top500
                </h1>

            </div>

            <div className="top500">
                <AlbumDisplay albumData={albumData}/>
            </div>

                {/*<Links />*/}

            <hr></hr>
            
        </div>

        </>
    )
}

