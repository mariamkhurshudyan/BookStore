import styles from "./UserStatus.module.css";
import Title from "../UI/Title/Title";

const UserStatus = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.section}>
        <Title headingText="Most Read Format" headingLevel="h5" />
        <p>Print</p>
      </div>
      <div className={styles.section}>
        <Title headingText="Total read/own" headingLevel="h5" />
        <p>4/7</p>
      </div>
      <div className={styles.section}>
        <Title headingText="Most re-read book" headingLevel="h5" />
        <p>Just My Type: A Book About Fonts by Simon Garfield</p>
      </div>
    </div>
  );
};

export default UserStatus;
