import styles from './Book.module.css';

const Book = ({source, title, label , snippet}) => {
    return (
        <div className={styles.container}>
            <img src={source} alt='Book Cover'/>
            <p>{title}</p>
            <label className={styles[label]}>{label}</label>
            <div className={styles.info}>
                <p>{title}</p>
                <p>{snippet}</p>
                <select>
                    <option>Start</option>
                    <option>Loaned</option>
                    <option selected="">Finished</option>
                </select>
            </div>
        </div>
    );
};

export default Book;