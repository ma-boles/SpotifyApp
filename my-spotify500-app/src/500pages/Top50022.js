import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react-router-dom";

export default function Top50022 ({ accessToken }) {

    const albumIds = ['7CzEknt9gJwe0QC89ir1JX', '1oIICL75sMuInkEhX8jj3b', '3V18DIKvRuwdxc2LE4wuac', '1Pus5h1qGedCn4CtOuPVtp', '7npBPiCHjPj8PVIGPuHXep', '63498KErJdRts4KWrgv2dT', '1hryVGXoRLV9WAhO97xEDJ', '2eOu9QDLP2MoO04ZtII2Vm', '4Jw0RycAqlXeAoymbc0CYp', '1aucGNKimhgARC7iO2xLt2', '5dl01XDIMXrmjJ22obqfhQ', '1RM6MGv6bcl6NrAG8PGoZk', '1R8kkopLT4IAxzMMkjic6X', '1XFNz6KIvLyIsLFOiLRKqP', '0p5QwhEke5P9mFY4CY9u4j', '78iX7tMceN0FsnmabAtlOC', '4TECsw2dFHZ1ULrT7OA3OL', '0YS25Dr3hMtMFlVTfuvzl4', '3CVie3TkZ0VHgT6mlwy7cp', '2SayIIdZkrtb9I4BbdnyOr'] //album ids from api
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

            <div className="page--nav">
                <Link to="../Top50021">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50023">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}