import Search from "../../Components/Search/Search";
import Logo from "../../Components/UI/logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <Search />
        <a href="/">Login</a>
      </div>
    </>
  );
};

export default Header;
