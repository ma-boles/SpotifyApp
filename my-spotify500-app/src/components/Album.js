import "../styles/Albums.css";
import album from "../images/album-placeholder.png"

export default function Album () {

    const styles = {
        width: "175px",
        height: "175px",
        margin: "15px",
        borderRadius: "10px"
    }

     // Determine the window width dynamically
     const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
     // Modify the styles object based on the window width
     if (windowWidth <= 425) {
         styles.width = '100px';
         styles.height = '100px';
         styles.margin = '13px';
     }

     if (windowWidth <= 320) {
        styles.width = '80px';
        styles.height = '80px';
        styles.margin = '10px';
    }
    
    return (
        
        <div className="card--album">
            <img style={styles} src={album} classname="album--cover" ></img>
            <h2 className="album--h2">Album</h2>
            <h3 className="album--h3">Year・Artist</h3>
        </div>
        )
}