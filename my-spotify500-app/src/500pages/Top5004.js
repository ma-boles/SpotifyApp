/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import Links from "../components/Links";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/


export default function Top5004 ({ accessToken }) {

    const albumIds = ['3miZDfDnP7SmOXAJXWdFmz', '28yHV3Gdg30AiB8h8em1eW', '1hOK2ey9W76x9GnftSRgrw', '2tm3Ht61kqqRZtIYsBjxEj', '0B6BbyElOe4bwziJrunOTe', '7Eoz7hJvaX1eFkbpQxC5PA', '3YPK0bNOuayhmSrs0sIIBR', '5G5UwqPsxDKpxJLX4xsyuh', '09AwlP99cHfKVNKv4FC8VW', '0Y7qkJVZ06tS2GUCDptzyW', '2mBbV0Ad6B4ydHMZlzAY7S'/*, Neil Young - Harvest*/, '3GH4IiI6jQAIvnHVdb5FB6', '4Uv86qWpGTxf7fU7lG5X6F', '7lEOKZaOpqP70UYqdLPejG', '5ljIGCRRvS48V4ADzPGav2', '5mQnSrc0cFV6greyhJJIR6'/*, Elvis Presley - The Sun Sessions*/, '3mH6qwIy9crq0I9YQbOuDf', '5fxYu3rqjCNTSPKN8mtEl2' ]; //album ids from api
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

                        <li className="top500--li--current">151-200</li>

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