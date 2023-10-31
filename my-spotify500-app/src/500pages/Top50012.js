/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50012 ({ accessToken }) {

    const albumIds = ['4LaRYkT4oy47wEuQgkLBul', '6cuNyrSmRjBeekioLdLkvI', '0xzaemKucrJpYhyl7TltAk', '3y6G5El2I6QrJA9BdfAbqA', '0rPtXOMN42nsLDiShvGamv', '5iIWnMgvSM8uEBwXKsPcXM', '18tV6PLXYvVjsdOVk0S7M8', '5F3GEttPPR58Gg15BKUsTd'/*, Patsy Cline - The Ultimate Collection*/, '48i37aZTC1prDr4EcpQeEa', '0qKA3aqubD47jfFVoPfsiy', '7MBQWjukLxXZYvQ8vzEH7t', '1pFUGy3ABpLRRE3oNMPbDb', '7pGb2cOGVz6vLyaZaKOQ7D', '55fq75UfkYbGMq4CncCtOH', '2noRn2Aes5aoNVsU6iWThc', '5aEtg4dxdBk4pj6SJ3hNsM', '0HHRIVjvBcnTepfeRVgS2f', '3AJ15ysr4Hz5p0N2tnNb1F', '3nTXqOEHr6AfTb1WSaB4Pm'] //album ids from api
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

                <Links />

            {/*<div className="top500--links">
                <ul className="top500--ul">

                    <Link to="../Top500">
                        <li className="top500--li">1-50</li>
                    </Link>

                    <Link to="../Top5002">
                        <li className="top500--li">51-100</li>
                    </Link>

                    <Link to="../Top5003">
                        <li className="top500--li--current">101-150</li>
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

                    <Link to="../Top5007">
                        <li className="top500--li">301-350</li>
                    </Link>

                    <Link to="../Top5008">
                        <li className="top500--li">351-400</li>
                    </Link>

                    <Link to="../Top5009">
                        <li className="top500--li">401-450</li>
                    </Link>

                        <li className="top500--li--current">451-500</li>
                    
                </ul>
    </div>*/}
    
            <hr></hr>
            
        </div>

        </>
    )
}