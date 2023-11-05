import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";
import { Link } from "react-router-dom";

export default function Top50014 ({ accessToken }) {

    const albumIds = ['7CSP7J60QKIBCqOV64qILq', '6NTrwu1XJ56jBPx7HMksbZ', '6wCttLq0ADzkPgtRnUihLV', '0bCAjiUamIFqKJsekOYuRw', '0OHDiDMyxzWJfwtoeHNCf4', '0PT5m6hwPRrpBwIHVnvbFX', '5viZ5HyYtV0wafK7DoXmgF', '7ojNQckNp7Tj2BkLJCiiUL', '7D2NdGvBHIavgLhmcwhluK', '7f6xPqyaolTiziKf5R5Z0c', '5Q3xLiKnY4ShDuQda7qfg2', '0HHmJpwOXXRJu9HI9iQiEO', '7LMOo068Ndv0wjTGUDtYqK', '02XyFDfvHfIwtqOC3o0PcK', '3tgJmEz0R0ZsRSrpwafp4R', '35UJLpClj5EDrhpNIi4DFg', '6TqRKHLjDu5QZuC8u5Woij', '0GqpoHJREPp0iuXK3HzrHk', '1To7kv722A8SpZF789MZy7', '4ycNE7y1rp5215g1kkqk1P'] //album ids from api
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
                <AlbumDisplay albumData={albumData}/>
            </div>

            <div className="page--nav">
                <Link to="../Top50013">
                    <p className="nav--back">BACK</p>
                </Link>                   
                <Link to="../Top50015">
                    <p className="nav--next">NEXT</p>
                </Link>
            </div>

                <Links />
    
            <hr></hr>
            
        </div>

        </>
    )
}