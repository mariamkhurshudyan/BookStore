import styles from "./Analytics.module.css";
import Table from "../Table/Table";
import UserStatus from "../UserStatus/UserStatus";
import classNames from "classnames/bind";

const style = classNames.bind(styles)

const Analytics = ({className1, className2}) => {
    const className = style(className1,className2)

  return (
    <div className={className}>
      <Table />
      <UserStatus />
    </div>
  );
};

export default Analytics;
