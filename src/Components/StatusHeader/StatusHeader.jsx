import styles from "./StatusHeader.module.css";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

const StatusHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title headingLevel="h2" headingText="Book Title" />
        <p>Book description</p>
      </div>
        <Button name={"Add New Book"} type={"button"} color={"primary"} />
    </div>
  );
};

export default StatusHeader;
