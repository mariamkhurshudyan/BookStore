import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {SidebarData.map((value, key) => {
          return (
            <li key={key}>
              <Link to={value.path} style={{ color: "#191e38" }}>
                {value.icon}
                <span>{value.title}</span>
              </Link>
              {value.sub &&
                value.sub.map((category, index) => {
                  return (
                    <div key={index} className="sub-category">
                      <Link to={category.path} style={{ color: "#191e38" }}>
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
