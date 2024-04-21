import { Header } from "components/common";
import { Fragment } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Features from "./Features";
import JoinCommunity from "./JoinCommunity";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <Features />
      <JoinCommunity />
    </Fragment>
  );
};

export default Home;
