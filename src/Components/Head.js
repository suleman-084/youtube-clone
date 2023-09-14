import React from "react";
import { menuIcon, userIcon, logoIcon } from "../Utils/image";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-xl">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="icon"
          src={menuIcon}
        />
        <img className="h-8 mx-3 cursor-pointer" alt="Logo" src={logoIcon} />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 bg-gray-100 px-5  py-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img className="h-8 col-span-1" src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
