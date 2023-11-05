import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                <Link to="../Top50012">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50014">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}