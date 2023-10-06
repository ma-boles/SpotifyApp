import React from "react";
import Carousel from "../components/Carousel"; 
import Album from "../components/Album";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    return(
        <>
        <section className='homePage'>
            <div className="home">
            
                <Carousel />

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
      <p className="footer--p">&copy; 2023 mab.dev</p>

      </>
    )
}