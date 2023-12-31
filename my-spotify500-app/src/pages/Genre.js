import "../styles/Genre.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Genre () {
    return (
        <>
        <div className="genre--page">
            <div className="genre--header">
                <nav className="genre--nav">
                    <img src={left} className='genre--arrowLeft' alt="back"></img>
                    <img src={right} className='genre--arrowRight'alt="next"></img>
                </nav>
                <h1 className="h1--genre">
                    Genre
                </h1>

            </div>
            <h2 className="h2--genre">Featured Genres</h2>

            <div className="genre">

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