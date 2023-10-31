/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top5007 ({ accessToken }) {

    const albumIds = ['4RLIesiAVONV4fOUlOSmr4', '3nJnyDV8fwFpffo0EyHQto', '58MQ0PLijVHePUonQlK76Y', '5n52kyQKeUZs5ObZJejLQd', '1kmyirVya5fRxdjsPFDM05', '4jovLVRCu6H0Ce6NHR4eTZ', '4j4w5DDWMKD7ePStAl19OF', '7HVoV2lgVsmuiHsjbbUJB4', '5Dbax7G8SWrP9xyzkOvy2F', '34MHuXONazzgSxI0cThpAg', '3539EbNgIdEDGBKkUf4wno', '6zIYEv6soMoaZiypsHB5dd'/*, Joni Mitchell - Hejira*/, '18XFe4CPBgVezXkxZP6rTb', '5vBZRYu2GLA65nfxBvG1a7', '3ywVzrwMQ3Kq43N9zBdBQm', '0Lg1uZvI312TPqxNWShFXL', '5MzwGwnO9gkh0z6Nl4FF8h', '6r7LZXAVueS5DqdrvXJJK7', '39kLAVdcgW7jbMcTEaY2qy']; //album ids from api
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

                <Links/>

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

                        <li className="top500--li--current">301-350</li>
                
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