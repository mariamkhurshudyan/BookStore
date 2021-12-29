import styles from "./UserStatus.module.css";

const UserStatus = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.section}>
        <h5>Most Read Format</h5>
        <p>Print</p>
      </div>
      <div className={styles.section}>
        <h5>Total read/own</h5>
        <p>4/7</p>
      </div>
      <div className={styles.section}>
        <h5>Most re-read book</h5>
        <p>Just My Type: A Book About Fonts by Simon Garfield</p>
      </div>
    </div>
  );
};

export default UserStatus;
