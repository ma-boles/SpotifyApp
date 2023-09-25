import React from "react";
import Logo from "../images/Spotify_Logo_RGB_White.png"


export default function LoginCard() {
    return(
        <section className="login">
            <img src={Logo}></img>
            <h2>Log in to continue.</h2>
            <input placeholder="Email or username" type="text"></input>
            <input placeholder="Password" type="password"></input>

        <div>
            <p>Remember me</p>
            <input type="radio"></input>
        </div>
        
        <div className="div--button">
            <button>LOG IN</button>
            <hr/>
            <button>LOG IN WITH FACEBOOK</button>
            <p>DON'T HAVE AN ACCOUNT? <strong>SIGNUP</strong></p>
        </div>
        </section>
    )
}
