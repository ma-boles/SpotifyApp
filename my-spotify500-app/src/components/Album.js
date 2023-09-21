import "../styles/Albums.css";
import album from "../images/album-placeholder.png"

export default function Album () {

    const styles = {
        width: 175,
        height: 175,
        margin: 15,
        borderRadius: 10
    }
    return (
        
        <div className="card--album">
            <img style={styles} src={album} classname="album--cover" ></img>
            <h2 className="album--h2">Album</h2>
            <h3 className="album--h3">Year・Artist</h3>
        </div>
        )
}