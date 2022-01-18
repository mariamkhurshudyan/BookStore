import styles from "./Table.module.css";
import {tableHeader } from "./TableData";
import Title from "../UI/Title/Title";
import {useSelector} from "react-redux";

const Table = () => {
    const {planet} = useSelector(state => state)
  return (
    <div className={styles.holder}>
        <div className={styles.title}>
             <Title headingText="Some data about the discovered planets" headingLevel="h4"/>
        </div>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            {tableHeader.map(value => (
               <td key={value.id} className={styles[value.position]}>{value.title}</td>
                ))}
          </tr>
        </thead>
        <tbody>
          {planet.slice(7).map((value,index) => {
            return (
              <tr key={index} className={ index === 2 ? '' : styles.row}>
                <td >{value.name}</td>
                <td className={styles.center}>{value.diameter} km</td>
                <td className={styles.right}>{value.climate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
