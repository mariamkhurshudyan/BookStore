import styles from "./Analytics.module.css";
import Table from "../Table/Table";
import UserStatus from "../UserStatus/UserStatus";
const Analytics = ({className1, className2}) => {
  return (
    <div className={`${styles[className1]} ${styles[className2]}`}>
      <Table />
      <UserStatus />
    </div>
  );
};

export default Analytics;
