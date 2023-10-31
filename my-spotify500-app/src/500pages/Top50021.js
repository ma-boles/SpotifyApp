import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50021 ({ accessToken }) {

    const albumIds = ['54V45InMvJ6uVtRtO6h1Co', '6zZXBV5eC1oISyUGZFfthw', '7eaQqVyq6xzAVgsxSzSP83'/*, Anita Baker - Rapture, Nuggets: Original Artyfacts from the First Psychedelic Era 1965-1968*/, '2GuROKcqyHdpIDcgxml1C7'/*, Neil Young = Everybody Knows This Is Nowhere*/, '7cTXWw02BWHxyH77wRfhuQ', '4jxokHekH1qSad1DcC82ku', '01uTaEF0YlcBgNwaSS9iIl', '4BcfuxQ4EO07Y53yr6YhAJ', '2NT1Pc0MXlXORHLBkHyKQW', '5w2X5ZmdE4u0XGkOU7BiLG', '7rAk4WPpYlYr0fElVfXTOF', '6mGpQtwteyjKS4Up9tXuND', '0qbl8aNaCUOvX8HGsZYLfh', '2iPH3iUmpa9ufIpwY76keF', '7jvcSnCnugLcisBCNBm60s', '5dtw6CoMhbrSj01YUvdQOF', '5tXZfxvr2VaWibD74nw8VL'] //album ids from api
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