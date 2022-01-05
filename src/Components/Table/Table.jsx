import styles from "./Table.module.css";
import { tableData, tableHeader } from "./TableData";
import Title from "../UI/Title/Title";

const Table = () => {
  return (
    <div className={styles.holder}>
        <div className={styles.title}>
             <Title headingText="Your favourite authors in this category" headingLevel="h4"/>
        </div>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            {tableHeader.map((value, index) => (
               <td key={index} className={styles[value.position]}>{value.title}</td>
                ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => {
            return (
              <tr className={styles.row}>
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
