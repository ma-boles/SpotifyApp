import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

export default function Top50019 ({ accessToken }) {

    const albumIds = ['0FZK97MXMm5mUQ8mtudjuK', '1B4oPgG5ljWTRxsKcTHAYn', '4q1HNSka8CzuLvC8ydcsD2', '39jsLMRmrTpfdq2vE4TCUe', '19bQiwEKhXUBJWY6oV3KZk', '4ldiyfqRvKiIasHHuDftuP', '0ptlfJfwGTy0Yvrk14JK1I', '4RzYS74QxvpqTDVwKbhuSg', '1cCAb1vN8uUsdfEylVmTLs', '7slHgsEMuJfnuft5LAPyw6'/*, The Temptations - Anthology*/, '2rogKfOpmCFuqNhtGKf2dX', '71rxIr6MJYUzDG9ge6Jq3J', '2IWaNq5o4tG1w6yxve5BMU', '4uG8q3GPuWHQlRbswMIRS6', '0vVekV45lOaVKs6RZQQNob', '0EabZMx74C2wyXhvMMO1eI', '05n0d2kfwGPhKpTonLHRpY', '2xg7iIKoSqaDNpDbJnyCjY', '4Z8nWz3dGybOP7lhMZpcOo' ] //album ids from api
    const albumData = useAlbumFetcher({ accessToken, albumIds })

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
                <Link to="../Top50018">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50020">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}