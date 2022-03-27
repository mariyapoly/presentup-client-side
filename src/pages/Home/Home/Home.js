import React from "react";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeCountDown from "../HomeCountDown/HomeCountDown";
import HomeService from "../HomeService/HomeService";
import HomeSlider from "../HomeSlider/HomeSlider";
import OurTeam from "../../OurTeam/OurTeam";

const Home = () => {
  return (
    <>
      <HomeSlider></HomeSlider>
      <HomeCountDown></HomeCountDown>
      <HomeAbout></HomeAbout>
      <HomeService></HomeService>
      <OurTeam></OurTeam>
    </>
  );
};

export default Home;
