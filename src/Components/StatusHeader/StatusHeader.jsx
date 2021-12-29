import Analytics from "../Analytics/Analytics";
import styles from "./StatusHeader.module.css";
import Button from "../UI/Button/Button";

const StatusHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Book Title</h2>
        <p>Book description</p>
      </div>
      <div className={styles.button}>
        <Button name={"Add New Book"} type={"button"} color={"primary"} />
      </div>
      <Analytics />
    </div>
  );
};

export default StatusHeader;
