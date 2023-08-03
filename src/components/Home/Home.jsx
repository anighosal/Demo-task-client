import React from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import About from "../About/About";
import Story from "../Story/Story";
import Succes from "../Succes/Succes";

const Home = () => {
  return (
    <div>
      <FeaturedJob></FeaturedJob>
      <About></About>
      <Story></Story>
      <Succes></Succes>
    </div>
  );
};

export default Home;
