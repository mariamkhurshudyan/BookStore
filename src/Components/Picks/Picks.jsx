import styles from "./Picks.module.css"
import {PicksData} from "./PicksData";
import Button from "../UI/Button/Button";

const Picks = () => {
    return (
        <div className={styles.container}>
            {PicksData.map( book =>(
                <div key={book.id} className={`${styles.cover} ${styles[book.color]}`}>
                    <img src='https://c4.wallpaperflare.com/wallpaper/945/452/836/space-earth-moon-vertical-wallpaper-preview.jpg' alt='book cover'/>
                    <div className={styles.info}>
                            <p> {book.title}</p>
                            <p> {book.text}</p>
                            <Button color='white' type='button' name='Add to Wishlist'/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Picks;