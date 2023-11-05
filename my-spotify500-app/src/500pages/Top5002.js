import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
/*import { useAlbumFetcher } from "../components/useAlbumFetcher";*/
/*import AlbumDisplay from "../components/AlbumDisplay";*/
/*import Links from "../components/Links";*/
import { Link } from "react-router-dom";

export default function Top5002 (/*{ accessToken }*/) {

    /*const albumIds = ['43YIoHKSrEw2GJsWmhZIpu', '2HTbQ0RHwukKVXAlTmCZP2', '4xwx0x7k6c5VuThz5qVqmV', '6QaVfG1pHYl1z15ZxkvVDW', '12n11cgnpjXKLeqrnIERoS', '0OeuSeP8wp8n8OuTqYb61C', '3tQd5mwBtVyxCoEo4htGAV', '2lO9yuuIDgBpSJzxTh3ai8', '1klALx0u4AavZNEvC4LrTL', '7rSZXXHHvIhF4yUFdaOCy9', '1weenld61qoidwYuZ1GESA', '7dK54iZuOxXFarGhXwEXfF', '097eYvf9NKjFnv4xA9s2oV', '5jgI8Eminx9MmLBontDWq8', '50o7kf2wLwVmOTVYJOTplm', '2ZytN2cY4Zjrr9ukb2rqTP', '2V5rhszUpCudPcb01zevOt', '4NP1rhnsPdYpnyJP0p0k0L', '1JvXxLsm0PxlGH4LXzqMGq', '48D1hRORqJq52qsnUYZX56' ]; //album ids from api
    const albumData = useAlbumFetcher({ accessToken, albumIds });*/

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
                {/*<AlbumDisplay albumData={albumData}/>*/} 
            </div>

            <div className="page--nav">
                    <Link to="../Top500">
                        <p className="nav--back">BACK</p>
                    </Link>                   
                    <Link to="../Top5003">
                        <p className="nav--next">NEXT</p>
                    </Link>
                </div>

                {/*<Links />*/}
            
            <hr></hr>
            
        </div>

        </>
    )
}