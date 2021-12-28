import Analytics from "../Analytics/Analytics";
import styles from "./Status.module.css";
import Button from "../UI/Button/Button";

const Status = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Book Title</h1>
        <p>Book description</p>
      </div>
      <div className={styles.button}>
        <Button name={"Add New Book"} type={"button"} color={"primary"} />
      </div>
      <Analytics />
    </div>
  );
};

export default Status;
