import styles from './Book.module.css';
import Select from "../UI/Select/Select";

const Book = ({source, title, label , snippet}) => {
    return (
        <div className={styles.container}>
            <img src={source} alt='Book Cover'/>
            <p>{title}</p>
            <div className={styles.status}>
            <label className={styles[label]}>{label}</label>
            <div className={styles.info}>
                <p>{title}</p>
                <p>{snippet}</p>
                 <Select/>
            </div>
            </div>
        </div>
    );
};

export default Book;