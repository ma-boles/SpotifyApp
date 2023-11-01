import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";

export default function Top50024 ({ accessToken }) {

    const albumIds = ['7EJ0OT5ZqybXxcYRa6mccM', '6VWKy5o2OcdeWa7yolazjU', '533zqKatpy90jse2K5IaiQ', '27eI33obJuyKebMTxAJJam', '6Y5SoiYENbNuTBc6mTUKG9', '1xPtXzS5yCbDAqC7pxRCaF', '1cXFSOdjxmS13cOTtnNQAo', '1Jv2AqzhgsduUik2p4k3cS', '3xoAUqjKs7Ps7wR26VAMbq', '6wpqS71CJr3I0dLguYiZdJ', '6lPb7Eoon6QPbscWbMsk6a', '76290XdXVF9rPzGdNRWdCh', '4pLuE50wL9T26lSv42X0J2', '1BumwwIEw1EC3xAHyf1ive', '3w7TTi80vZApF0rQE5DMYb', '7KOmuu3cbJQEQYGt3XmLmY', '76MT4lqzC1oSvSYnHHjMam', '1klQV0Z1x2oXmcCb7IvUZt', '6iv9WTw1nhNxSsgKaxMp4E', '563h536tB6n8Dn62jr4RZG'] //album ids from api
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