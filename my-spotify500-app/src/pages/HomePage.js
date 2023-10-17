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

          <h1 className="h1--home">Top 10</h1>

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