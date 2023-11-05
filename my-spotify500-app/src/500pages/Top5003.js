import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

export default function Top5003 ({ accessToken }) {

    const albumIds = ['4l4u9e9jSbotSXNjYfOugy', '6dVIqQ8qmQ5GBnJ9shOYGE', '1p12OAWwudgMqfMzjMvl2a', '3kEtdS2pH6hKcMU9Wioob1', '2QuHyvguNhl5kfdoE17RRe', '4WoQ94qzwQj28n3nlSOVLB', '3ToX9inehiXTv17hpaOyie', '4jKeipwuUTjlx9USNYdhZn', '5ceB3rxgXqIRpsOvVzTG28', '54I5tDCMjnNVWSENHg8EDH', '4hQtcgvaybCqBsTrfiL1jC', '0MWrKayUshRuT8maG4ZAOU', '5z090LQztiqh13wYspQvKQ', '2yuTyv0L51qvYuI5RIktlA', '4LH4d3cOWNNsVw41Gqt2kv', '7sCpW2cLGcRk1zf9zi0Yqd', '4vXFiaDS8zuEl5bOUbW53x', '5EyIDBAqhnlkAHqvPRwdbX', '3PResMqFgQYBfzTnqTKwQw', '4pG3bKkbmReDt5QTDn3JDz']; //album ids from api
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
                    <Link to="../Top5002">
                        <p className="nav--back">BACK</p>
                    </Link>                   
                    <Link to="../Top5004">
                        <p className="nav--next">NEXT</p>
                    </Link>
                </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}