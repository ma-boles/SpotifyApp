import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react";

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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                <Link to="../Top5009">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50011">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}