import React from "react";
import Podcast from "./Podcast";

export default function PodcastDisplay({ podcastData }) {
    return (
        <>
            {podcastData.map((podcast, index) => ( 
              <Podcast key={index} podcastData={podcast}/>
            ))}
        </>
    )
}