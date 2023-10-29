import React from "react";
import Album from "./Album";

export default function AlbumDisplay() {
    return (
        <>
            {albumData.map((album, index) => ( 
              <Album key={index} albumData={album}/>
            ))}
        </>
    )
}