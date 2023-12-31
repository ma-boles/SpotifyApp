import "../styles/Decade.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Decade () {
    return (
        <>
        <div className="decade--page">
            <div className="decade--header">
                <nav className="decade--nav">
                    <img src={left} className='decade--arrowLeft' alt="back"></img>
                    <img src={right} className='decade--arrowRight' alt="next"></img>
                </nav>
                <h1 className="h1--decade">
                    Decade
                </h1>

            </div>

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
            <hr></hr>

        </div>

         </>
        
    )
}