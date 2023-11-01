import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
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
                <AlbumDisplay albumData={albumData}/>
            </div>

                <Links />

            <hr></hr>
            
        </div>

        </>
    )
}