import Search from "../../Components/Search/Search";
import Logo from "../../Components/UI/Logo/Logo";
import styles from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {useState} from "react";
import {VscChromeClose, VscMenu} from "react-icons/vsc";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState( false)
    const toggle = ()=>{
        setOpen(!open)
    }
  return (
    <>
      <div className={styles.header} onClick={() => navigate('')}>
          <span className={styles.logo}>
        <Logo />
          </span>
        <span className={styles.menu} onClick={()=>{toggle()}}>
           {open ?  <VscChromeClose size='25'/> : <VscMenu size='24'/>}
        </span>
        <Search />
        <a href="/" className={styles.link}>Login</a>
      </div>
        <div className={styles.relative}>
            <Sidebar className={open ? 'header': 'hide'}/>
        </div>
    </>
  );
};

export default Header;
