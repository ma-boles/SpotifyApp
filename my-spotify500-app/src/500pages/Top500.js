/*import { Link } from "react-router-dom";*/
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import Links from "../components/Links";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Album from "../components/Album";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";



export default function Top500 ({ accessToken }) {

    const albumIds = ['2v6ANhWhZBUKkg6pJJBs3B', '2CNEkSE8TADXRT2AzcEt1b'/*, Joni Mitchell = Blue*/, '6YUCc2RiXcEKS9ibuZxjt0','0ETFjACtuP2ADo6LFhL6HN', '2guirTSEqLizK7j9i1MTTZ', '1bt6q2SruMsBtcerNVtpZB', '7nXJ5k4XgRj5OLg9m8V3zc','4WD4pslu83FF6oMa1e19mF', '1BZoqf8Zje5nGdwZhOjAtD', '3PRoXYsngSwjEQWR5PsHWR', '2ANVost0y2y52ema1E9xAZ', '5WndWfzGwCkHzAbQXVkg2V', '5U4dnRZsfW8NmwBBkELFPh', '1Rj1daFzMlYzLv7lJl14hz', '6FCzvataOZh68j8OKzOt9a', '20r762YmB5HeofjMCiPMLv', '6YabPKtZAjxwyWbuO9p4ZD', '7ycBtnsMtyVbbwTfJwRjSP', '6GjwtEZcfenmOf6l18N7T7']; //album ids from api
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

{                /*<AlbumDisplay />*/
}                {albumData.map((album, index) => ( 
              <Album key={index} albumData={album}/>
            ))}

                {/*<Album />                
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
                <Album />
                <Album />                
                <Album />*/}


            </div>
                <Links />
            {/*<div className="top500--links">
                <ul className="top500--ul">

                    <Link to="../Top5002">
                        <li className="top500--li">51-100</li>
                    </Link>

                    <Link to="../Top5003">
                        <li className="top500--li">101-150</li>
                    </Link>

                    <Link to="../Top5004">
                        <li className="top500--li">151-200</li>
                    </Link>

                    <Link to="../Top5005">
                        <li className="top500--li">201-250</li>
                    </Link>

                    <Link to="../Top5006">
                        <li className="top500--li">251-300</li>
                    </Link>

                    <Link to="../Top5007">
                        <li className="top500--li">301-350</li>
                    </Link>

                    <Link to="../Top5008">
                        <li className="top500--li">351-400</li>
                    </Link>

                    <Link to="../Top5009">
                        <li className="top500--li">401-450</li>
                    </Link>

                    <Link to="../Top50010">
                        <li className="top500--li">451-500</li>
                    </Link>

                </ul>
            </div>*/}

            <hr></hr>
            
        </div>

        </>
    )
}