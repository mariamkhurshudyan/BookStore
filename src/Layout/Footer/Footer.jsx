import styles from "./Footer.module.css";
import Logo from "../../Components/UI/logo/Logo";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
