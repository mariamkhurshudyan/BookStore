import StatusHeader from "../Components/StatusHeader/StatusHeader";
import Analytics from "../Components/Analytics/Analytics";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <StatusHeader />
        <Analytics className1='primary'/>
        <Navbar/>
        <Outlet/>
    </>
  );
};

export default Home;
