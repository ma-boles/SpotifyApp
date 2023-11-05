import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react-router-dom";

export default function Top5009 ({ accessToken }) {

    const albumIds = ['6vUWpE8qciYHOhf7mgaGny', '3ly9T2L4pqTZijFgQssd3x', '6kFmH2VMMFaUrK4QhY4hLi', '4TJIdlY9hGSSTO1kUs1neh', '4Mw9Gcu1LT7JaipXdwrq1Q', '2MwhKwYfaGXfCMNKJQr6VA', '5g3Yi15plTSMaq6tYiuw8p', '6DlSUW5gmq6Byc3osKDJ2p', '3IILMjMMnoN2sKzgesX8KV', '6fRqzJT070Kp9RWlSXmKcY', '3BYlBcND6PeKoW6ZODjZO3', '0JwHz5SSvpYWuuCNbtYZoV', '7wOOA7l306K8HfBKfPoafr', '4oxdKcC9epGo9viy1j8fN7', '4eLPsYPBmXABThSJ821sqY', '0aFNb4RDk2hmKKLa0bzXNz', '4VykjLwkyfKMZVLrJJVrYh', '2P0TLZSGxpDmYdp16bI4hv', '7dRdaGSxgcBdJnrOviQRuB', '2amHBpP8C0EUy6yBNy6nN6']; //album ids from api
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
                <Link to="../Top5008">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50010">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />

            <hr></hr>
            
        </div>

        </>
    )
}