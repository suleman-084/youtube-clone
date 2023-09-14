import React from "react";
import Buttons from "./Buttons";
const BtnList = () => {
  const list = [
    "All",
    "Gaming",
    "Music",
    "Live",
    "CSS",
    "Cricket",
    "Cooking",
    "shahrukhkhan",
    "JavaScript",
    "React",
    "Tseries",
  ];
  return (
    <div className="flex ">
      {list.map((item) => (
        <Buttons key={item} name={item} />
      ))}
    </div>
  );
};

export default BtnList;
