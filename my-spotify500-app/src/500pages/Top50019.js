import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

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