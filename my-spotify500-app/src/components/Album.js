import "../styles/Albums.css";
import album from "../images/AlbumCover.png"


export default function Album ({ albumData }) {

    const styles = {
        width: "175px",
        height: "175px",
        margin: "15px",
        borderRadius: "10px"
    }

     // Determine the window width dynamically
     const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
     // Modify the styles object based on the window width
     if(windowWidth <= 768) {
        styles.width = '160px'
        styles.height = '160px'
        styles.margin = '15px'

     }
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
            <div className="album--info">
                <h2 className="album--h2">{albumData.name}</h2>
                <h3 className="album--h3">{albumData.release_date}・{albumData.artists[0].name}</h3>
            </div>
        </div>
        )
}