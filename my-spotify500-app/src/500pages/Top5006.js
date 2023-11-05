import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react-router-dom"

export default function Top5006 ({ accessToken }) {

    const albumIds = ['1J8QW9qsMLx3staWaHpQmU', '49kzgMsxHU5CTeb2XmFHjo', '34LxHI9x14qXUOS8AWRrYD', '29m6DinzdaD0OPqWKGyMdz', '0Y5Wlv2OJKaW0uDJ5HnUfy', '2Rwf2nPYZQ9aIe4QXACTC7', '630o1rKTDsLeIPreOY1jqP', '3o5EnVZNJXtfPV8tCoagjI', '5SqbMEyAt8332ISGiLX0St'/*, Joni Mitchell = Court and Spark*/, '7GWkceE5McMVfffd1RGL6Y', '5WupqgR68HfuHt3BMJtgun', '5Y0p2XCgRRIjna91aQE8q7', '2k8KgmDp9oHrmu0MIj4XDE', '6PBZN8cbwkqm1ERj2BGXJ1', '0A13JySVHzBoRZFk2o89Wl', '2widuo17g5CEC66IbzveRu', '7iwS1r6JHYJe9xpPjzmWqD', '5PfnCqRbdfIDMb1x3MPQam']; //album ids from api
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
                <Link to="../Top5005">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top5007">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}