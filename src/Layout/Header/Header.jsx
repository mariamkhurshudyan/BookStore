import Search from "../../Components/Search/Search";
import Logo from "../../Components/UI/logo/Logo";
import styles from "./Header.module.css";
import {FcMenu} from "react-icons/fc";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
          <span className={styles.logo}>
        <Logo />
          </span>
        <span className={styles.menu}>
            <FcMenu size='26'/>
        </span>
        <Search />
        <a href="/" className={styles.link}>Login</a>
      </div>
    </>
  );
};

export default Header;
