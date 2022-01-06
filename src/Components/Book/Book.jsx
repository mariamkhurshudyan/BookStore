import styles from './Book.module.css';

const Book = ({source, title, label , snippet ,uniqId}) => {
    return (
        <div key={uniqId} className={styles.container}>
            <img src={source} alt='Book Cover'/>
            <p>{title}</p>
            <label className={styles[label]}>{label}</label>
            <div className={styles.info}>
                <p>{title}</p>
                <p>{snippet}</p>
                <select defaultValue="Start">
                    <option>Start</option>
                    <option>Loaned</option>
                    <option>Finished</option>
                </select>
            </div>
        </div>
    );
};

export default Book;