import styles from './Book.module.css';

const Book = ({source, title, label}) => {
    return (
        <div className={styles.container}>
            <img src={source} alt='Book Cover'/>
            <p>{title}</p>
            <label>{label}</label>
        </div>
    );
};

export default Book;