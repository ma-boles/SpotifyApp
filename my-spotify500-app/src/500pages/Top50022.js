import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

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