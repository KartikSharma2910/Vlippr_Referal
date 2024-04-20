import { Header } from "components/common";
import { Fragment } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
