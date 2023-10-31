import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50020 ({ accessToken }) {

    const albumIds = ['3THuBNp86ScbTXwpTmAbdw', '79dL7FLiJFOO0EoehUHQBv', '49MNmJhZQewjt06rpwp6QR', '0YgkR96bK9JSHcj236W9ZK', '3SBh2kzao9z3gLCzOV45ho', '5fMlysqhFE0itGn4KezMBW', '5vkqYmiPBYLaalcmjujWxK', '0k5C3Z7w7uQpyGFQEzl7yB', '43iBTEWECK7hSnE0p6GgNo', '50j4Wm1b9hLpSpPIA39Vp9', '2VQFbPduHKk3SAyczWfpok', '2UCdfQEDgzWtbzpaD4Mo47', '2QJmrSgbdM35R67eoGQo4j', '3zgDLoVcpVGfFbDZJf3uHI', '5Hfbag0SsHxafx1SySFSX6', '3fRCOoTbBsOITBWlCRCJQr', '0S0KGZnfBGSIssfF54WSJh', '190Tx9jPHndq0qUlq79BJJ', '4Uc6YCjpfyjj02rZfg2EUv', '1L4HE00En7eNK74voVZums'] //album ids from api
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