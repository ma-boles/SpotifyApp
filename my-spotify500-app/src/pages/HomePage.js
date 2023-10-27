import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import Modal from "../components/Modal";
import LoginCard from "../components/LoginCard";

import HeaderImg from "../images/HomeLogo.jpg";
/*import Logo from "../images/Spotify_Logo_RGB_White.png";*/

import "../styles/HomePage.css";
import "../styles/Login.css";

export default function HomePage({ accessToken }) {

    const [ albumData, setAlbumData ] = useState([]);

    useEffect(() => {
      const albumIds = ['2v6ANhWhZBUKkg6pJJBs3B'/*, '2CNEkSE8TADXRT2AzcEt1b', /*'Blue - Joni Mitchell','6YUCc2RiXcEKS9ibuZxjt0','0ETFjACtuP2ADo6LFhL6HN','2guirTSEqLizK7j9i1MTTZ','1bt6q2SruMsBtcerNVtpZB','7nXJ5k4XgRj5OLg9m8V3zc','4WD4pslu83FF6oMa1e19mF','1BZoqf8Zje5nGdwZhOjAtD'*/]; //album ids from api

      const fetchDataForAlbum = async (albumIds) => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/albums/${albumIds}`, {
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

            <img src={HeaderImg} style={styles} alt="website logo"></img>

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
            {albumData.slice(0, 10).map((album, index) => ( 
              <Album key={index} albumData={album}/>
            ))}
          </div>

      </section>

      <Link to="../Top500">
        <h4>See All</h4>
      </Link>   
      
      <hr></hr>

      </>
    )
}










/*import React, { useEffect, useState } from "react";
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
      const albumIds = [
        '2v6ANhWhZBUKkg6pJJBs3B'/*, 
        '2CNEkSE8TADXRT2AzcEt1b', 
        '6YUCc2RiXcEKS9ibuZxjt0', 
        '0ETFjACtuP2ADo6LFhL6HN', 
        '2guirTSEqLizK7j9i1MTTZ', 
        '1bt6q2SruMsBtcerNVtpZB', 
        '7nXJ5k4XgRj5OLg9m8V3zc', 
        '4WD4pslu83FF6oMa1e19mF', 
      '1BZoqf8Zje5nGdwZhOjAtD'*/; //album ids from api

     /* const fetchDataForAlbum = async () => {
        const albumPromises = albumIds.map(async (albumId) => {
          try {
            const response = await fetch(`https://api.spotify.com/v1/albums/${albumIds}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });

          if(response.status === 200) {
            return response.json();
          } else {
            console.error(`Error fetching album data for ${albumId}`);
            return null;
          }
        } catch(error) {
          console.error(`Error fetching album data for ${albumId} : ${error}`);
          return null;
        }
      });

      try {
        const albumDataArray = await Promise.all(albumPromises);
        const validAlbumData = albumDataArray.fiilter((data) => data !== null);
        setAlbumData(validAlbumData);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };
    fetchDataForAlbum();
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
               {/* login modal section */

              /* <Modal isOpen={isModalOpen} onClose={closeModal}>
                <LoginCard closeModal={closeModal}/>
              </Modal>
          </div>


          <div className="top10">
            {albumData.slice(0, 10).map((album, index) => ( 
              <Album key={index} albumData={album}/>
            ))}
          </div>

      </section>

      <Link to="../Top500">
        <h4>See All</h4>
      </Link>   
      
      <hr></hr>

      </>
    )
}*/