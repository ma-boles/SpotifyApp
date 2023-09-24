import "../styles/Search.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";

import Album from "../components/Album"

export default function Search() {
    return (
        <>
        <section className="search">
            <nav className="search--nav">
                    <img src={left} className='search--arrowLeft'></img>
                    <img src={right} className='search--arrowRight'></img>
                    <input className="search--input" placeholder="What do you want to listen to?">
                        </input>
                </nav>
            <div className="search--header">
                
            </div>
            <div className="search--recent">
                <h2 className="search--h2">Recent searches</h2>
                <p className="search--p">See All</p>
            </div>
            <aside className="search--card">
                <Album />
                <Album />
                <Album />
                
            </aside>
            <div className="search--browse">
                <h2 className="search--h2browse">Browse all</h2>
            </div>
            <aside className="search--card">
                <Album />
                <Album />
                <Album />
                
            </aside>
            <hr></hr>

        </section>
        <p className="footer--p">&copy; mab.dev 2023</p>

        </>
    )
}