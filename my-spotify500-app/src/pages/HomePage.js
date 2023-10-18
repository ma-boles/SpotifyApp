import React from "react";
import Album from "../components/Album";
import HeaderImg from "../images/HomeLogo.jpg";

import "../styles/HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

    return(
        <>
        <section className='homePage'>
            <div className="home">

            <img src={HeaderImg} style={slideStyles}></img>

            </div>

          <div className="header--top10">
            <h1 className="h1--home">Top 10</h1>

          <Link to="../LoginPage" className="a--logIn">
            <button className="button--logIn">Log In</button>
          </Link>
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