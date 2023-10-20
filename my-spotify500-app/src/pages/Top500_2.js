import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Top500_2 () {
    return (
        <>
        <div className="top500--page">
            <div className="top500--header">
                <nav className="top500--nav">
                    <img src={left} className='top500--arrowLeft'></img>
                    <img src={right} className='top500--arrowRight'></img>
                </nav>
                
                <h1 className="h1--top500">
                    Top500
                </h1>

            </div>

            <div className="top500">

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

            </div>
            <div className="top500--links">
                <ul className="top500--ul">
                    <li className="top500--li">1-50</li>
                    <li className="top500--li">51-100</li>
                    <li className="top500--li">101-150</li>
                    <li className="top500--li">151-200</li>
                    <li className="top500--li">201-250</li>
                    <li className="top500--li">251-300</li>
                    <li className="top500--li">301-350</li>
                    <li className="top500--li">351-400</li>
                    <li className="top500--li">401-450</li>
                    <li className="top500--li">451-500</li>
                </ul>
            </div>
            <hr></hr>
            
        </div>

        </>
    )
}