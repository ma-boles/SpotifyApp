import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import Album from "../components/Album";
/*import AlbumDisplay from "../components/AlbumDisplay";*/
import Modal from "../components/Modal";
import LoginCard from "../components/LoginCard";

import HeaderImg from "../images/HomeLogo.jpg";
/*import Logo from "../images/Spotify_Logo_RGB_White.png";*/

import "../styles/HomePage.css";
import "../styles/Login.css";

export default function HomePage({ accessToken }) {

  const albumIds = ['2v6ANhWhZBUKkg6pJJBs3B','2CNEkSE8TADXRT2AzcEt1b'/*, Joni Mitchell = Blue */, '6YUCc2RiXcEKS9ibuZxjt0','0ETFjACtuP2ADo6LFhL6HN','2guirTSEqLizK7j9i1MTTZ','1bt6q2SruMsBtcerNVtpZB','7nXJ5k4XgRj5OLg9m8V3zc','4WD4pslu83FF6oMa1e19mF','1BZoqf8Zje5nGdwZhOjAtD']; //album ids from api
  const albumData = useAlbumFetcher({ accessToken, albumIds });

  // album display styles

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
{            /*<AlbumDisplay />*/
}            {albumData.map((album, index) => ( 
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




/*const [ albumData, setAlbumData ] = useState([]);

    useEffect(() => {
      const albumIds = ['2v6ANhWhZBUKkg6pJJBs3B','2CNEkSE8TADXRT2AzcEt1b', 'Blue - Joni Mitchell','6YUCc2RiXcEKS9ibuZxjt0','0ETFjACtuP2ADo6LFhL6HN','2guirTSEqLizK7j9i1MTTZ','1bt6q2SruMsBtcerNVtpZB','7nXJ5k4XgRj5OLg9m8V3zc','4WD4pslu83FF6oMa1e19mF','1BZoqf8Zje5nGdwZhOjAtD']; //album ids from api

      const fetchDataForAlbum = async (albumId) => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
          
          if(response.status === 200) {
            const data = await response.json();
            return data;
          } else {
            console.error('Error fetching album data');
            return null;
          }
        } catch(error) {
          console.error('Error:', error);
          return null;
        }
      };

      // fetch data for all albums at same time using Promise.all
      const fetchAlbums = async () => {
        const albumPromises = albumIds.map((albumId) => fetchDataForAlbum(albumId));
        const albumResults = await Promise.all(albumPromises);
        setAlbumData(albumResults.filter((data) => data !== null));
      };
      
      fetchAlbums();
    }, [accessToken]);*/