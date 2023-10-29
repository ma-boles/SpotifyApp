import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import Album from "../components/Album";
import Links from "../components/Links";
import { Link } from "react-router-dom"

export default function Top5002 () {
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
                <Album />                
                <Album />


            </div>

            <Links />
            
            {/*<div className="top500--links">
                <ul className="top500--ul">

                    <Link to="../Top500">
                        <li className="top500--li">1-20</li>
                    </Link>

                    <Link to="../Top5002">
                        <li className="top500--li">21-40</li>
                    </Link>

                    <Link to="../Top5003">
                        <li className="top500--li">41-60</li>
                    </Link>

                    <Link to="../Top5004">
                        <li className="top500--li">61-80</li>
                    </Link>

                    <Link to="../Top5005">
                        <li className="top500--li">81-100</li>
                    </Link>

                    <Link to="../Top5006">
                        <li className="top500--li">101-120</li>
                    </Link>

                    <Link to="../Top5007">
                        <li className="top500--li">121-140</li>
                    </Link>

                    <Link to="../Top5008">
                        <li className="top500--li">141-160</li>
                    </Link>

                    <Link to="../Top5009">
                        <li className="top500--li">161-180</li>
                    </Link>

                    <Link to="../Top50010">
                        <li className="top500--li">181-200</li>
                    </Link>

                    <Link to="../Top50011">
                        <li className="top500--li">201-220</li>
                    </Link>

                    <Link to="../Top50012">
                        <li className="top500--li">221-240</li>
                    </Link>

                    <Link to="../Top50013">
                        <li className="top500--li">241-260</li>
                    </Link>

                    <Link to="../Top50014">
                        <li className="top500--li">261-280</li>
                    </Link>

                    <Link to="../Top50015">
                        <li className="top500--li">281-300</li>
                    </Link>

                    <Link to="../Top50016">
                        <li className="top500--li">301-320</li>
                    </Link>

                    <Link to="../Top50017">
                        <li className="top500--li">321-340</li>
                    </Link>

                    <Link to="../Top50018">
                        <li className="top500--li">341-360</li>
                    </Link>

                    <Link to="../Top50019">
                        <li className="top500--li">361-380</li>
                    </Link>

                    <Link to="../Top50020">
                        <li className="top500--li">381-400</li>
                    </Link>

                    <Link to="../Top50021">
                        <li className="top500--li">401-420</li>
                    </Link>

                    <Link to="../Top50022">
                        <li className="top500--li">421-440</li>
                    </Link>

                    <Link to="../Top50023">
                        <li className="top500--li">441-460</li>
                    </Link>

                    <Link to="../Top50024">
                        <li className="top500--li">461-480</li>
                    </Link>

                    <Link to="../Top50025">
                        <li className="top500--li">481-500</li>
                    </Link>

                </ul>
    </div>*/}
            <hr></hr>
            
        </div>

        </>
    )
}