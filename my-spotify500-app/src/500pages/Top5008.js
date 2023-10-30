import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top5008 ({ accessToken }) {

    const albumIds = ['0DQyTVcDhK9wm0f6RaErWO', '0PMasrHdpaoIRuHuhHp72O', '2Cdd4W17oumNihEt2aPNJB', '4Q7cPyiP8cMIlUEHAqeYfd', '6t7956yu5zYf5A829XRiHC', '4M6s2jbhKWEcOdXZ8WiHts', '7yQtjAjhtNi76KRu05XWFS', '392p3shh2jkxUxY2VHvlH8', '5t4FHrIAHI8nolSAOBRgPp', '6yskFQZNlLYhkchAxELHi6', '34K1Kvskt9arWy8E1Gz3Lw', '6AFFu3ilmlEDz1I9ZaNOZw', '2fDJpBJhtloxzUENHlU9JB', '5pIUimaQ6XePPXbMUi3te0', '4FWvo9oS4gRgHtAwDwUjiO', '2sOLW5TSgXiLZBacdHxO6m', '2u30gztZTylY4RG7IvfXs8', '3cADvHRdKniF9ELCn1zbGH', '5W9OT0a5iZlBr83a9WMKFY', '5B4PYA7wNN4WdEXdIJu58a']; //album ids from api
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

                        <li className="top500--li--current">351-400</li>
                    
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