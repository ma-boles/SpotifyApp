import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import Album from "../components/Album";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";
/*import { Link } from "react-router-dom"*/

export default function Top5002 ({ accessToken }) {

    const albumIds = ['43YIoHKSrEw2GJsWmhZIpu', '2HTbQ0RHwukKVXAlTmCZP2', '4xwx0x7k6c5VuThz5qVqmV', '6QaVfG1pHYl1z15ZxkvVDW', '12n11cgnpjXKLeqrnIERoS', '0OeuSeP8wp8n8OuTqYb61C', '3tQd5mwBtVyxCoEo4htGAV', '2lO9yuuIDgBpSJzxTh3ai8', '1klALx0u4AavZNEvC4LrTL', '7rSZXXHHvIhF4yUFdaOCy9', '1weenld61qoidwYuZ1GESA', '7dK54iZuOxXFarGhXwEXfF', '097eYvf9NKjFnv4xA9s2oV', '5jgI8Eminx9MmLBontDWq8', '50o7kf2wLwVmOTVYJOTplm', '2ZytN2cY4Zjrr9ukb2rqTP', '2V5rhszUpCudPcb01zevOt', '4NP1rhnsPdYpnyJP0p0k0L', '1JvXxLsm0PxlGH4LXzqMGq', '48D1hRORqJq52qsnUYZX56' ]; //album ids from api
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
                        <li className="top500--li">1-20</li>
                    </Link>

                    <Link to="../Top5002">
                        <li className="top500--li">21-40</li>
                    </Link>

                    <Link to="../Top5003">
                        <li className="top500--li">41-60</li>
                    </Link>

                    <Link to="../Top5004">
                        <li className="top500--li">61-80</li>
                    </Link>

                    <Link to="../Top5005">
                        <li className="top500--li">81-100</li>
                    </Link>

                    <Link to="../Top5006">
                        <li className="top500--li">101-120</li>
                    </Link>

                    <Link to="../Top5007">
                        <li className="top500--li">121-140</li>
                    </Link>

                    <Link to="../Top5008">
                        <li className="top500--li">141-160</li>
                    </Link>

                    <Link to="../Top5009">
                        <li className="top500--li">161-180</li>
                    </Link>

                    <Link to="../Top50010">
                        <li className="top500--li">181-200</li>
                    </Link>

                    <Link to="../Top50011">
                        <li className="top500--li">201-220</li>
                    </Link>

                    <Link to="../Top50012">
                        <li className="top500--li">221-240</li>
                    </Link>

                    <Link to="../Top50013">
                        <li className="top500--li">241-260</li>
                    </Link>

                    <Link to="../Top50014">
                        <li className="top500--li">261-280</li>
                    </Link>

                    <Link to="../Top50015">
                        <li className="top500--li">281-300</li>
                    </Link>

                    <Link to="../Top50016">
                        <li className="top500--li">301-320</li>
                    </Link>

                    <Link to="../Top50017">
                        <li className="top500--li">321-340</li>
                    </Link>

                    <Link to="../Top50018">
                        <li className="top500--li">341-360</li>
                    </Link>

                    <Link to="../Top50019">
                        <li className="top500--li">361-380</li>
                    </Link>

                    <Link to="../Top50020">
                        <li className="top500--li">381-400</li>
                    </Link>

                    <Link to="../Top50021">
                        <li className="top500--li">401-420</li>
                    </Link>

                    <Link to="../Top50022">
                        <li className="top500--li">421-440</li>
                    </Link>

                    <Link to="../Top50023">
                        <li className="top500--li">441-460</li>
                    </Link>

                    <Link to="../Top50024">
                        <li className="top500--li">461-480</li>
                    </Link>

                    <Link to="../Top50025">
                        <li className="top500--li">481-500</li>
                    </Link>

                </ul>
    </div>*/}
            <hr></hr>
            
        </div>

        </>
    )
}