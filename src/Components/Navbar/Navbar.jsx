import styles from "./Navbar.module.css"
import Title from "../UI/Title/Title";
import {Link} from "react-router-dom";
import Books from "../Books/Books";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <p>Books</p>
            <div>
            <Link to='Library' element={<Books/>}>
                <span className={styles.link}>Library</span>
            </Link>
            <Link to='Library' element={<Books/>}>
                <span className={styles.link}>Picks For You</span>
            </Link>
            </div>
        </div>
    );
};

export default Navbar;