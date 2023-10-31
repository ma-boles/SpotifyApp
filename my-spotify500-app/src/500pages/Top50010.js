/*import { Link } from "react-router-dom";*/
import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Links from "../components/Links";

export default function Top50010 ({ accessToken }) {

    const albumIds = ['1lPoRKSgZHQAYXxzBsOQ7v', '1HiG0ukRmFPN13EVcf98Jx', '4HTVABUq8amDUxBv3zJbX4', '1FvdZ1oizXwF9bxogujoF0', '6OHri5qNxwCdVSdyCslspd', '1DCI2yWmV4UI7Aga71yx9B', '3AI5kAUjgNtZBwFRi6opDc', '4Yw5uS8at8GkWmH2gZmLY0', '3tshnNFNhHrO6NUQ0BHw42', '5cT7ee1sy2oEbFalP4asS4', '7rd4PorIOPjPTy7qdUeeCt', '11oR0ZuqB3ucZwb5TGbZxb', '5hW8vgOySUKEglHdGmNALK', '3Us57CjssWnHjTUIXBuIeH', '2Aiv0ThDpFa7lqHphR6MN5', '0Rzg7fqyWE39G6wKipxrns'/*, The Beatles = Meet the Beatles!*/, '3eXETk1esvZPRluDCWH3GN', '7o14zVcXSRk7clV6QCEdOD', '3JcNnjMVSKiNpqhErZarW0']; //album ids from api
    const albumData = useAlbumFetcher({ accessToken, albumIds });

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