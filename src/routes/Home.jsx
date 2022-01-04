import StatusHeader from "../Components/StatusHeader/StatusHeader";
import Analytics from "../Components/Analytics/Analytics";
import Books from "../Components/Books/Books";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <StatusHeader />
        <Analytics />
        <Navbar/>
        <Books/>
    </>
  );
};

export default Home;
