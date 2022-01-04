import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <p>Books</p>
            <div>
            <NavLink to=''>
                <span className={styles.link}>Library</span>
            </NavLink>
            <NavLink to='picks'>
                <span className={styles.link}>Picks For You</span>
            </NavLink>
            </div>
        </div>
    );
};

export default Navbar;