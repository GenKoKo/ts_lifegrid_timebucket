import React from "react";
import HeroMessage from "./HeroMessage";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className=" h-16 bg-red-500 flex items-center ">
      <div className=" basis-2/12 text-gray-700">
        <HeroTitle></HeroTitle>
      </div>
      <div className=" basis-6/12"></div>
      <HeroMessage> good phrases</HeroMessage>
    </div>
  );
};

export default Hero;
