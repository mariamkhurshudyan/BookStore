import Search from "../../Components/Search/Search";
import Logo from "../../Components/UI/logo/logo";
import "./Header.css";


const Header = () => {
  return (
    <>
      <div className="site-header">
          <Logo />
          <Search />
        </div>
    </>
  );
};

export default Header;
