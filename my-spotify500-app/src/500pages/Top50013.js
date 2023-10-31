/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50013 ({ accessToken }) {

    const albumIds = ['5mAPk4qeNqVLtNydaWbWlf', '4RMGrhJRnGiNqmKqhqpLlX', '6XqM4NINcx3oc7NhOUKxXp', '3WFTGIO6E3Xh4paEOBY9OU', '5lEphbceIgaK1XxWeSrC9E', '7p7kcsrdoJ8DKQIMouujcb', '2PfGKHtqEX58bHtkQxJnWG', '5dN7F9DV0Qg1XRdIgW8rke', '2MH37enG6IPvNK5QFLyKes', '6TxgQwGrbG3XZLNPOEhg7E', '2ei2X6ghPnw7YRwQtAH075', '1u2Qni8cVRptDTaA00fmBC', '2Se4ZylF9NkFGD92yv1aZC', '5fmIolILp5NAtNYiRPjhzA', '0o1uFxZ1VTviqvNaYkTJek', '6hmmX5UP4rIvOpGSaPerV8', '17CT6ru3CyDXAi6xVaSUzg'/*, Joni Mitchell - The Hissing of Summer Lawns*/, '6JltsW8Goc3cZQ0GOtTX2z', '0TfUvdJAj5ggwaLihQQ5qs'] //album ids from api
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