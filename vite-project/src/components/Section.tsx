import React from "react";
import SectionLifegrid from "./SectionLifegrid";
import SectionTodo from "./SectionTodo";

const Section = () => {
  return (
    <div className="flex flex-row md:flex-row items-center ">
      <div className="basis-3/4">
        <SectionLifegrid></SectionLifegrid>
      </div>
      <div className=" basis-1/4">
        <SectionTodo></SectionTodo>
      </div>
    </div>
  );
};

export default Section;
