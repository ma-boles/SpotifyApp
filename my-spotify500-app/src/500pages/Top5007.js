import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react-router-dom";

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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                <Link to="../Top5006">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top5008">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links/>
    
            <hr></hr>
            
        </div>

        </>
    )
}