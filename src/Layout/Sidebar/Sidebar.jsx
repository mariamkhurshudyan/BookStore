import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {SidebarData.map((value, key) => {
          return (
            <li key={key} className={styles.category}>
              <Link to={value.path}>
                <span>{value.icon}</span>
                <p>{value.title}</p>
              </Link>
              {value.sub &&
                value.sub.map((category, index) => {
                  return (
                    <div key={index} className={styles.subCategory}>
                      <Link to={category.path}>
                        <span>{category.title}</span>
                      </Link>
                    </div>
                  );
                })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
