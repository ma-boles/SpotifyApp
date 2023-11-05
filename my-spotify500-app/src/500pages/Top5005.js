import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Links from "../components/Links";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import { Link } from "react"

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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                    <Link to="../Top5004">
                        <p className="nav--back">BACK</p>
                    </Link>                   
                    <Link to="../Top5006">
                        <p className="nav--next">NEXT</p>
                    </Link>
                </div>

                <Links />

            <hr></hr>
            
        </div>

        </>
    )
}