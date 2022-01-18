import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <p>Planets</p>
            <div>
                <div className={styles.hidden}>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.link}  to='/stats'>
                    Stats
                </NavLink>
                </div>
                <NavLink  className={({ isActive }) => isActive ? styles.active : styles.link}  to='/'>
                   Collection
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='picks'>
                    Picks For You
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;