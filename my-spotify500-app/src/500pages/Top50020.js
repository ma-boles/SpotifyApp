import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react"

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
                <AlbumDisplay />
            </div>

            <div className="page--nav">
                <Link to="../Top50019">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50021">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}