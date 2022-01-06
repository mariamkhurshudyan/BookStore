import styles from './Books.module.css'
import {BookData} from "./BookData";
import Book from "../Book/Book";

const Books = () => {
    return (
        <div className={styles.container}>
            {BookData.map(book=>(
                <Book uniqId={book.id} source={book.imageUrl} title={book.title} label={book.label} snippet={book.snippet}/>
            ))
            }
        </div>
    );
};

export default Books;