import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
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
                <AlbumDisplay albumData={albumData}/>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}