import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <p>Books</p>
            <div>
            <NavLink  className={({ isActive }) => isActive ? styles.active : styles.link}  to='/'>
               Library
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='picks'>
                Picks For You
            </NavLink>
            </div>
        </div>
    );
};

export default Navbar;