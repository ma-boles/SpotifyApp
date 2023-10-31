import { Link } from "react-router-dom";
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50025 ({ accessToken }) {

    const albumIds = ['3e9VtbXnl6tqrFKrnNyxaI', '48kU5gP41TqZEw32Cwhsna'/*, Muddy Waters - The Anthology: 1947-1972*/, '2KkMVsxymoNR7hRmBcMttd', '1K1Qdd60pW48wEgWGQLeRt', '1Xsprdt1q9rOzTic7b9zYM', '34aFnrFRBlErcbU6moRZR3', '0Z1Y5L90NjqUD351YUQWdA'/*, Back to Mono (1958-1969)*/, '7upKDUGJUjsvfIe6vuVB0b', '7xV2TzoaVc0ycW7fwBwAml', '6wxpS5o0ty5CLqyH5fIRln', '1iVf41qWHZsAk9DwY43WnV', '0CoNLgOwcZGBUSwd9fAZuy', '1IWhZEOwEoXbOB4a40XaR3', '5hcKSTqKOLuzJgYIQileAe', '1DIr8JMRBnm1cZMYIGKb8t', '0wKU4153oTf5Ne3Wbbcykd', '3ZJJdnvxztzpOvwvzUzUxC', '6ZB8qaR9JNuS0Q0bG1nbcH' ] //album ids from api
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