import { Header } from "components/common";
import { Fragment } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Features from "./Features";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <Features />
    </Fragment>
  );
};

export default Home;
