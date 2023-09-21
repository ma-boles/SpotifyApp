import "../styles/Decade.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Decade () {
    return (
        <div className="decade--page">
            <div className="decade--header">
                <nav className="decade--nav">
                    <img src={left} className='decade--arrowLeft'></img>
                    <img src={right} className='decade--arrowRight'></img>
                </nav>
                <h1 className="h1--decade">
                    Decade
                </h1>

            </div>
            <h2 className="h2--decade">...</h2>

            <div className="decade">

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