import Analytics from "../Components/Analytics/Analytics";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import StatusHeader from "../Components/StatusHeader/StatusHeader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPlanets} from "../store/ducks/planets";
import Loader from "../Components/UI/Loader/Loader";

const Home = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state)
    useEffect(() => {
        dispatch(getPlanets())
    }, [dispatch])

    if(loading) {
        return <Loader/>
    }

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
