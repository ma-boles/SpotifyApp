import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                <Link to="../Top50020">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50022">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}