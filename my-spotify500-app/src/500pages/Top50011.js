import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                <Link to="../Top50010">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50012">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}