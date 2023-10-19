import React from "react";
import "../styles/Login.css"
import LogoGreen from "../images/Spotify_Logo_RGB_Green.png"
import { Link } from "react-router-dom";


export default function Login() {
    return(
        <>
        <section className="login">

            <Link to="/LoginCard">
            <img src={LogoGreen} className="logo--green"></img>
            </Link>

        </section>
        </>
    )
}