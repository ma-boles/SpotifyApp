import "../styles/Podcasts.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";

export default function Podcasts () {
    return (
        <>
        <section className="podcasts--page">
            <aside className="div--header">
                <nav className="podcast--nav">
                    <img src={left} className='podcast--arrowLeft' alt="back"></img>
                    <img src={right} className='podcast--arrowRight' alt="next"></img>
                </nav>
                <h1 className="h1--podcasts">
                    Podcasts
                </h1>

            </aside>
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
            <hr></hr>

        </section>

        
        </>
    )
}