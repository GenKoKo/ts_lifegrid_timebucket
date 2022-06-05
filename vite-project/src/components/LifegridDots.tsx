import React from "react";
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";

let rowData: number[] = [];
for (let i = 0; i < 52; i++) {
  rowData.push(i);
}

// const rowData =

const LifegridDots = () => {
  return (
    <div className=" text-md">
      {rowData.forEach((element) => <BiCheckboxSquare></BiCheckboxSquare>)}
    </div>
  );
};

export default LifegridDots;
