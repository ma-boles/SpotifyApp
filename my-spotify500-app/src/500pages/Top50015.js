import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

export default function Top50015 ({ accessToken }) {

    const albumIds = ['3EfpOFKjotrMQTFTnxrXaB', '3GmwKB1tgPZgXeRJZSm9WX', '58GjBhQvLHwfQFJtdP9Oxg', '40Wi0Ej08sw9B4URIOabOI', '0NJYYhhvOATAkUipSJEBDb', '0fLhefnjlIV3pGNF9Wo8CD', '0pkrqPjeq9K5KD0hFqAKNa', '5BPCP7WSGBG4br2o4WRmd8', '2Ul7B1LEHxXzYubtkTMENs', '1UsmQ3bpJTyK6ygoOOjG1r', '283NWqNsCA9GwVHrJk59CG', '3REUXdj5OPKhuDTrTtCBU0', '57F44c0MTziVzHPEuJtH9A', '1xpGyKyV26uPstk1Elgp9Q', '4m2880jivSbbyEGAKfITCa'/*, Neil Young & Crazy Horse - Rust Never Sleeps*/, '2ikq6LspaBbUG2qyiV5qdx', '5d71Imt5CIb7LpQwDMQ093', '7njGz7ZeDXL6cH3VnflcQ2', '4UMe0Ods7kygK6OISasZe9'] //album ids from api
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
                <Link to="../Top50014">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50016">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />

            <hr></hr>
            
        </div>

        </>
    )
}