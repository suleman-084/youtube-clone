import React from "react";
import Sidebar from "./Sidebar";
import MenuContainer from "./MenuContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MenuContainer />
    </div>
  );
};
export default Body;
