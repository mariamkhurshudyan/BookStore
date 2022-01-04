import styles from "./Navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <p>Books</p>
            <div>
            <Link to=''>
                <span className={styles.link}>Library</span>
            </Link>
            <Link to='picks'>
                <span className={styles.link}>Picks For You</span>
            </Link>
            </div>
        </div>
    );
};

export default Navbar;