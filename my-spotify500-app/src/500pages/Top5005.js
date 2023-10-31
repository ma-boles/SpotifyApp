/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import Links from "../components/Links";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/

export default function Top5005 ({ accessToken }) {

    const albumIds = ['2UJwKSBUz6rtW4QLK74kQu', '29f2cOueckYE8Nc1pkJjrU', '14UrtAcLym4a6f7IgXVGjF', '6mUdeDZCsExyJLMdAfDuwh', '0DFYbYCcHCEJPcN1hODG6K', '1jWmEhn3ggaL6isoyLfwBn', '3Q0zkOZEOC855ErOOJ1AdO', '6fQElzBNTiEMGdIeY0hy5l', '3qr4pTBWEU1SVf01j6RAx3'/*, Neil Young - After the Gold Rush*/, '4KT6G8fj8EEIfsyr75hbgc', '3uFZf8rykoHo7XMIQVYW6r', '6UkdyvPElK6JDkyeRClbI2', '5qhXaVIC5BdE4a5Kq1FMZG', '6X1x82kppWZmDzlXXK3y3q', '0BiNb8HYR4JvuxUa31Z58Q', '5gzLOflH95LkKYE6XSXE9k', '3iC6dJobZulVXp0F4Bojig', '1EoDsNmgTLtmwe1BDAVxV5', '0ky5kdvfPxSmSpj03hpSAE']; //album ids from api
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

                    <Link to="../Top5003">
                        <li className="top500--li">101-150</li>
                    </Link>

                    <Link to="../Top5004">
                        <li className="top500--li">151-200</li>
                    </Link>

                        <li className="top500--li--current">201-250</li>

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