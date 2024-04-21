import { Header } from "components/common";
import { Fragment } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Features from "./Features";
import JoinCommunity from "./JoinCommunity";
import Stars from "./Stars";
import Posts from "./Posts";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <Features />
      <JoinCommunity />
      <Stars />
      <Posts />
    </Fragment>
  );
};

export default Home;
