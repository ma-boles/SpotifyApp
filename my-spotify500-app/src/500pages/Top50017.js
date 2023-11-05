import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react-router-dom";

export default function Top50017 ({ accessToken }) {

    const albumIds = ['5XpEKORZ4y6OrCZSKsi46A', '3ekkFrfotMsEAKc5g71GHk', '2UxN3UKyS3Z5r0Sra8A5RF', '0RHX9XECH8IVI3LNgWDpmQ'/*, Jerry Lee Lewis - All Killer, No Filler: the Anthonlogy*/, '4JsSbaggaprB1AfDylXnxO', '6W3aTLI4B5UsPpWMvhT2W4', '1GXMNFfoHF4sN7lG8gZq1j', '4tUVkNYSFrrEqqrxBQW9PN', '72qrnM4yUNMDDlWiqKc8iY', '48AGkmM7iO4jrELRnNZGPV', '7GXP5OhYyPVLmcVfO9Iqin', '0sFuW4rH5mFZUjNKnckO3v', '1CHUXwuge9A7L2KiA3vnR6', '6BOlD6UGUg45IsUXPSplkY', '3JXODSjT9mUz2lIb4YIErw', '2KzCDxKpgLqBffHu1IZ7Kn', '6uoeezh45SYEb8lcT8gDTY', '4OD3LU6001esAtFshDX46M', '5IFOummNcGXY3qCBWRchqP'] //album ids from api
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
                <Link to="../Top50016">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50018">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />

            <hr></hr>
            
        </div>

        </>
    )
}