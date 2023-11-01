import "../styles/Top500.css";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import { useAlbumFetcher } from "../components/useAlbumFetcher";
import AlbumDisplay from "../components/AlbumDisplay";
import Links from "../components/Links";

export default function Top50018 ({ accessToken }) {

    const albumIds = ['3YDm8Vu6IOjjVdLNHlJtj0', '0jTGHV5xqHPvEcwL8f6YU5', '0UM9SydcBtsklCTFgGLvcT', '7a341nZsSfwyBsq1tMPETz', '1rmhti8uHw21LnaWMQy608', '78bpIziExqiI9qztvNFlQu', '3k8xoyOXkGgZxUKgpmxz4P', '55FP2ypQcghszSqylyBRbp', '0kT4F2mSpvTk3stwiaEStp', '7n0bcoRDylRw5PUKn2PlRJ', '6gKMWnGptVs6yT2MgCxw29', '0vE6mttRTBXRe9rKghyr1l', '4tJPWT4r4FSKwy784Qs1Fq', '7nZ0F572fluFD4tQCFf3z7', '4ZLy3U2q17Yjw7jkjXPJQj', '1yBoaVrgcup2hX2DCYUajs', '51CvLH7MxsLuFgTwVvzApx', '5iYYQwB0oH9FVyVlaOXZdr', '3mtVgumHx6y9I2UvW4lUd5'/*, Funkadelic - One Nation Under A Groove*/] //album ids from api
    const albumData = useAlbumFetcher({ accessToken, albumIds })

    return (
        <>
        <div className="top500--page">
            <div className="top500--header">
                <nav className="top500--nav">
                    <img src={left} className='top500--arrowLeft' alt="back"></img>
                    <img src={right} className='top500--arrowRight' alt="next"></img>
                </nav>
                
                <h1 className="h1--top500">
                    Top500
                </h1>

            </div>

            <div className="top500">
                <AlbumDisplay albumData={albumData}/>
            </div>

                <Links />

            <hr></hr>
            
        </div>

        </>
    )
}