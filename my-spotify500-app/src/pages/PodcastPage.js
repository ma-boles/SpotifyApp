import "../styles/Podcasts.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import PodcastDisplay from "../components/PodcastDisplay";
import { usePodcastFetcher } from "../components/usePodcastFetcher";

export default function PodcastPage ({ accessToken }) {

    const podcastIds = ['33QFO6XsHvF8ltEBWSM9IQ'/*, '1546jYbEXYZTrcxchawoaB', '12P5yq6Feh8W1AUp2JcwyX', '6S2xgtixkuqtPNtvSMbtGd', '1Wup8v02OtjsUiECaQi4fx', '4sAGj4lhX1ZcLeXWetfFvy', '17bGvY9KDZVM9n9GMs9vgr'*/];
    const podcastData = usePodcastFetcher({ accessToken, podcastIds });

    return (
        <>
        <section className="podcasts--page">
            <aside className="div--header">
                <nav className="podcast--nav">
                    <img src={left} className='podcast--arrowLeft' alt="back"></img>
                    <img src={right} className='podcast--arrowRight' alt="next"></img>
                </nav>
                <h1 className="h1--podcasts">
                    Podcasts
                </h1>

            </aside>
            <h2 className="h2--podcasts">Featured Podcasts</h2>

            <div className="podcasts">
                <PodcastDisplay podcastData={podcastData}/>

                {/*<Podcast />
                <Podcast />
                <Podcast />
                <Podcast />
                <Podcast />
                <Podcast />*/}
            </div>
            <hr></hr>

    </section>

        
        </>
    )
}