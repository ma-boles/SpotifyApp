/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50011 ({ accessToken }) {

    const albumIds = ['4v5x3Oo3UjQ9YmF3hRAip5', '0HMsmYvoT1h2x1C4di5faf', '5mwOo1zikswhmfHvtqVSXg', '4SZko61aMnmgvNhfhgTuD3', '44VxbAytHpVi3Rq8hRhild', '2de6LD7eOW8zrlorbS28na', '51B7LbLWgYLKBVSpkan8Z7', '5BGzOpea6At0Nd7tYtYZOP', '7AFsTiojVaB2I58oZ1tMRg', '3RPMCDSd1yj37hlqbizmeT', '5Dgqy4bBg09Rdw7CQM545s', '2EYVXfypcucR62WMKJl6Mr', '6B5favhKTShFTjRLsKIUfa', '3ZGUBwDiY5HPOcWv4SBPQg', '7rqgm1BnAZ8I4d6hukpkdg', '5bmpvyP7UGqB4VuXmrJUMy', '3LzKUdUTdJb6P7xGN6SotC', '5eg56dCpFn32neJak2vk0f', '7btiyhWzUfzxN3ijSiBpC8', '5bHkK1X4WEOzNvRhehvOcb'] //album ids from api
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

            {/*<AlbumDisplay />*/}
                {albumData.map((album, index) => ( 
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

                    <Link to="../Top500">
                        <li className="top500--li">1-50</li>
                    </Link>

                    <Link to="../Top5002">
                        <li className="top500--li">51-100</li>
                    </Link>

                    <Link to="../Top5003">
                        <li className="top500--li--current">101-150</li>
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

                        <li className="top500--li--current">451-500</li>
                    
                </ul>
    </div>*/}
    
            <hr></hr>
            
        </div>

        </>
    )
}