import React from "react";
import Logo from "../images/Spotify_Logo_RGB_White.png";
import { Link } from "react-router-dom";

export default function LoginCard() {
    return(
        <section className="login--card">
            <img src={Logo} className="login--img"></img>
            <h2>Log in to continue.</h2>
            <input placeholder="Email or username" type="text"></input>
            <input placeholder="Password" type="password"></input>

        <div className="div--remember">
            <p>Remember me</p>
            <input type="radio" id="radio"></input>
        </div>
        
        <div className="div--button">

            <Link to="/">
            <button>LOG IN</button>
            </Link>
            
            <hr/>
            <button>LOG IN WITH FACEBOOK</button>
            <p>DON'T HAVE AN ACCOUNT? <strong>SIGNUP</strong></p>
        </div>
        </section>
    )
}
