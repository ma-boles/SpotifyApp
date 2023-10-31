/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50023 ({ accessToken }) {

    const albumIds = ['1ePkYcH5ZQCb1b4tQeiEDj', '0P3oVJBFOv3TDXlYRhGL7s', '5fxvWHvIDPIALfTfRiwyB0', '1z0O8lKuQRs974S8wcRiAs', '252LyflX4wUeISSzgL392F', '6zV55F6W8kh1qe8LHhqRbz', '7CjJb2mikwAWA1V6kewFBF', '25uNcuL4dAoV62eKmr8Q0Y', '6D9urpsOWWKtYvF6PaorGE', '4ZLVPyXVXeMbnxyhxvsF7m', '2ARWEOvaUgm4FSj25MpY6F', '5gX0Oedkr1IgRO8OXhUR5k', '3umFHeEpc4yLXtrRcv9gLN', '3Qa2CdymyGvXkqoqIZykmT', '6W0V8B0fJItvOwC8v114rZ', '0fV9DAddjwNZcmCP1Q8b01', '1bg476ZQn7hmcXaU05SHV4', '2S8AWAM0nxyFy66YnUfIs3', '2B87zXm9bOWvAJdkJBTpzF' ] //album ids from api
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