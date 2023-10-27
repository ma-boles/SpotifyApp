import React from "react";
import Logo from "../images/Spotify_Logo_RGB_White.png";
import { Link } from "react-router-dom";
import "../styles/Login.css"

export default function LoginCard({ closeModal }) {

    {/* create function that closes modal after SUCCESSFUL log in */}
    

    return(
        <div className="login--modal" id="login--modal">
            <section className="login--card" id="login--card">
                <img src={Logo} className="login--img" alt="logo"></img>
                <h2 className="login--h2">Log in for full experience.</h2>
                <div>
                <input placeholder="Email or username" type="text"></input>
                <input placeholder="Password" type="password"></input>
                </div>

            <div className="div--remember">
                <p>Remember me</p>
                <input type="radio" id="radio"></input>
            </div>
            
            <div className="login--div--button">

                <Link to="/" className="login--a--login">
                    <button className="login--button--login" onClick={closeModal}>LOG IN</button>
                </Link>

                <hr className="login--hr"/>
                <p>DON'T HAVE AN ACCOUNT? <strong>SIGNUP</strong></p>
            </div>
            </section>
        </div>
    )
}
