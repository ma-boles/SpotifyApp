import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import Modal from "../components/Modal";
import LoginCard from "../components/LoginCard";

import HeaderImg from "../images/HomeLogo.jpg";
import Logo from "../images/Spotify_Logo_RGB_White.png";

import "../styles/HomePage.css";
import "../styles/Login.css";

export default function HomePage({ accessToken }) {

    const [ albumData, setAlbumData ] = useState([]);

    useEffect(() => {
      const albumIds = ['spotify:album:2v6ANhWhZBUKkg6pJJBs3B'/*, 'album_2', 'album_3','album_4','album_5','album_6','album_7','album_8','album_9','album_10'*/ ]; //album ids from api

      const fetchDataForAlbum = async (albumId) => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
          
          if(response.status === 200) {
            const data = await response.json();
            setAlbumData((prevData) =>[...prevData, data]);
          } else {
            console.error('Error fetching album data');
          }
        } catch(error) {
          console.error('Error:', error);
        }
      };

      //fetch data for each album id
      albumIds.forEach((albumId) => {
        fetchDataForAlbum(albumId);
      });
    }, [accessToken]);


    const styles = {
        width: "90%",
        height: "90%",
        marginTop: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

      const [isModalOpen, setModalOpen] = useState(false);

      const openModal = () => {
        console.log("opening modal")
        setModalOpen(true);
      };
      const closeModal = () => {
        console.log("closing modal")
        setModalOpen(false);
};

    return(
        <>
        <section className='homePage'>
            <div className="home">

            <img src={HeaderImg} style={styles}></img>

            </div>

          <div className="header--top10">
            <h1 className="h1--home">Top 10</h1>
              <button className="button--logIn" onClick={openModal}>Log In</button>
               {/* login modal section */}

               <Modal isOpen={isModalOpen} onClose={closeModal}>
                <LoginCard closeModal={closeModal}/>
              </Modal>
          </div>


          <div className="top10">
            {albumData.slice(0, 10).map((album, index) => {
              <Album key={index} albumData={album}/>
            })}
              {/*<Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />*/}
          </div>

      </section>

      <Link to="../Top500">
        <h4>See All</h4>
      </Link>   
      
      <hr></hr>

      </>
    )
}