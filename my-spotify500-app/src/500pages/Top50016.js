/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50016 ({ accessToken }) {

    const albumIds = ['2xbTV0Awe4Qm5caUVuPbMr'/*, Neil Young - Tonight's the Night, ABBA - The Definitve Collection*/, '6N8uPmDqbgXD3ztkCCfxoo', '6TRmLIsPKSPS71Cnq8FiMc', '7hI0QCwcx9GB8MZK24IfTT'/*, Sam Cooke - Portrait of a Legend: 1951-1964*/, '74jn28Kr29iyh8eZXSvnwi', '0KBdfMTMxi0oD1oVqApTjr', '4WXqZZ28geJSPtqLcCF56L'/* Neil Young - On the Beach*/, '3Yko2SxDk4hc6fncIBQlcM', '0hBWhJEmVyNPG2Jq71CJXz', '79EIRdmpPSIWfRlxaZdJbG', '355bjCHzRJztCzaG5Za4gq', '2nSduHVT17MPQCehfMRPG6', '4LrLP7DM1KBj8r2Sc098JA', '1uFp52Q9EXLNA6DTRYnpTj', '0um9FI6BLBldL5POP4D4Cw', '3OpKtGldm7NzZVVn1LFlYn' ] //album ids from api
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