import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {SidebarData.map((value, key) => {
          return (
            <li key={key}>
              <Link to={value.path}>
                {value.icon}
                <span>{value.title}</span>
              </Link>
              {value.sub &&
                value.sub.map((category, index) => {
                  return (
                    <ol key={index}>
                      <Link to={category.path}>
                        <span>{category.title}</span>
                      </Link>
                    </ol>
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
