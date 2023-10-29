import React, { useEffect, useState } from "react";

export default function AlbumFetcher ({ accessToken, albumIds })  {

    const [ albumData, setAlbumData ] = useState([]);
    
    useEffect(() => {
  
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
      }, [accessToken, albumIds]);
  

    return (
        <>
        </>
    )
}