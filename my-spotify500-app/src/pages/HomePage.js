import React from "react";
import Album from "../components/Album";
import HeaderImg from "../images/HomeLogo.jpg";
import Logo from "../images/Spotify_Logo_RGB_White.png";

import "../styles/HomePage.css";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function HomePage() {

    const styles = {
        width: "90%",
        height: "90%",
        marginTop: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

      function loginOpen(){
        const modal = document.getElementById("login--modal");
        const card = document.getElementById("login--card");

        modal.style.display = "block"
        card.style.display = "block"
      }

      function loginClose() {
        const close = document.getElementById("login--card");
        const modal = document.getElementById("login--modal");

        close.style.display = "none"
        modal.style.display = "none"
    }

    return(
        <>
        <section className='homePage'>
            <div className="home">

            <img src={HeaderImg} style={styles}></img>

            </div>

          < div className="header--top10">
            <h1 className="h1--home">Top 10</h1>

              <button className="button--logIn" onClick={loginOpen}>Log In</button>
          </div>


        {/* login modal section */}

         <div className="login--modal" id="login--modal">
            <h1>login</h1>

            <section className="login--card" id="login--card">
                <img src={Logo} className="login--img"></img>
                {/*<h2 className="login--h2">Log in to continue.</h2>*/}
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
                    <button className="login--button--login" onClick={loginClose}>LOG IN</button>
                </Link>

                <hr className="login--hr"/>
            {   /*<button className="login--button--facebook">LOG IN WITH FACEBOOK</button>*/}
                <p>DON'T HAVE AN ACCOUNT? <strong>SIGNUP</strong></p>
            </div>
            </section>

          </div>

          <div className="top10">
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

      </section>

      <Link to="../Top500">
        <h4>See All</h4>
      </Link>   
      
      <hr></hr>

      </>
    )
}