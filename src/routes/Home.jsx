import StatusHeader from "../Components/StatusHeader/StatusHeader";
import Analytics from "../Components/Analytics/Analytics";
import Books from "../Components/Books/Books";

const Home = () => {
  return (
    <>
      <StatusHeader />
        <Analytics />
        <Books/>
    </>
  );
};

export default Home;
