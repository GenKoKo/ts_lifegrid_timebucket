import React from "react";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className=" flex flex-row items-center gap-2 px-3 h-10 bg-slate-600">
      <div className="text-gray-200 basis-3/12 ">Home</div>
      <div className="basis-6/12 bg-indigo-600 ">123</div>
      <div className=" text-gray-200 basis-3/12 ">
        <Login></Login>
      </div>
    </div>
  );
};

export default Navbar;
