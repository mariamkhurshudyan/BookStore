import React, {useEffect} from "react";
import { SideBar, Footer, Header } from "./index";
import styles from "./Layout.module.css";
import Profile from "../Components/Profile/Profile";
import Loader from "../Components/UI/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getPlanets} from "../store/ducks/planets";

const Layout = ({ children }) => {
    const {loading} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlanets())
    }, [dispatch])
  return (
    <>
      <Header />
        <div className={styles.container}>
            <SideBar />
            <div className={styles.home}>
                { loading ? <Loader/> : children}</div>
          <Profile/>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
