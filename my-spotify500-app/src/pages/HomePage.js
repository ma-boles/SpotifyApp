import React from "react";
import Carousel from "../components/Carousel"; 
import Album from "../components/Album";

export default function HomePage() {
    return(
        <section className='homePage'>
        <div className="home">
        
         <Carousel /*slides={slides}*//>

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
    )
}