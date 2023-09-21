import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Top500 () {
    return (
        <div className="top500--page">
            <div className="top500--header">
                <nav className="top500--nav">
                    <img src={left} className='top500--arrowLeft'></img>
                    <img src={right} className='top500--arrowRight'></img>
                </nav>
                
                <h1 className="h1--top500">
                    Decade
                </h1>

            </div>
            <h2 className="h2--top500">...</h2>

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

            </div>
        </div>
        
    )
}