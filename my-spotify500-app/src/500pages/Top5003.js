import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

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
                            
            {/*<AlbumDisplay />*/
}                {albumData.map((album, index) => ( 
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

                    
                        <li className="top500--li--current">101-150</li>
                  

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