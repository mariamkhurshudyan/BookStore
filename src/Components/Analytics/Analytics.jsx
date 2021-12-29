import styles from "./Analytics.module.css";
import Table from "../Table/Table";
import UserStatus from "../UserStatus/UserStatus";
const Analytics = () => {
  return (
    <div className={styles.container}>
      <Table />
      <UserStatus />
    </div>
  );
};

export default Analytics;
