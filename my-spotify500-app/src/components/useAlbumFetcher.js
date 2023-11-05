import { useEffect, useState } from "react";


/*export function useAlbumFetcher ({ accessToken, albumIds })  {

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

        // fetch data for first batch of 10
        const firstBatch = albumIds.slice(0, 10);
        const firstBatchPromises = firstBatch.map((albumId) => fetchDataForAlbum(albumId));

        // fetch data for second batch of 10
        const secondBatch = albumIds.slice(10);
        const secondBatchPromises = secondBatch.map((albumId) => 
        new Promise ((resolve) => setTimeout(() => resolve(fetchDataForAlbum(albumId)), 1000)));

        // fetch data for all albums at same time using Promise.all
        const fetchAlbums = async () => {
        const firstBatchResults = await Promise.all(firstBatchPromises);
        const secondBatchResults = await Promise.all(secondBatchPromises);

        const albumResults = firstBatchResults.concat(secondBatchResults);
        setAlbumData(albumResults.filter((data) => data !== null));
        };
        
        fetchAlbums();
      }, [accessToken, albumIds]);
  

    return albumData;
}

/*const fetchAlbums = async () => {
  const albumPromises = albumIds.map((albumId) => fetchDataForAlbum(albumId));
  const albumResults = await Promise.all(albumPromises);
  setAlbumData(albumResults.filter((data) => data !== null));
};*/

/*const albumPromises = [];
          for (let i = 0; i < albumIds.length; i+= batchSize) {
          const batch = albumIds.slice(i, i + batchSize);
          const batchPromises = batch.map((albumId) => fetchDataForAlbum(albumId));
          albumPromises.push(Promise.all(batchPromises));
        }
          //flatten the results array
          const albumResults = (await Promise.all(albumPromises)).flat();*/