import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react"

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
                <AlbumDisplay />
            </div>

            <div className="page--nav">
                <Link to="../Top50024">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50025">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}