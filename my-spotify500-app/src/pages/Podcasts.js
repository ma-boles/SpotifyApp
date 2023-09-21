import "../styles/Podcasts.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Podcasts () {
    return (
        <div className="podcasts--page">
            <div className="div--header">
                <nav className="podcast--nav">
                    <img src={left} className='podcast--arrowLeft'></img>
                    <img src={right} className='podcast--arrowRight'></img>
                </nav>
                <h1 className="h1--podcasts">
                    Podcasts
                </h1>

            </div>
            <h2 className="h2--podcasts">Featured Podcasts</h2>

            <div className="podcasts">

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