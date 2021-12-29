import styles from "./Table.module.css";
import { tableData, tableHeader } from "./TableData";

const Table = () => {
  return (
    <div className={styles.holder}>
      <h4>Your favourite authors in this category</h4>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            {tableHeader.map((value, index) => {
              return <td className={styles[value.position]}>{value.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => {
            return (
              <tr>
                <td key={index}>{value.author}</td>
                <td className={styles.center}>{value.timesRead}</td>
                <td className={styles.right}>{value.nationality}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
