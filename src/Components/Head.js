import React, { useEffect, useState } from "react";
import { menuIcon, userIcon, logoIcon } from "../Utils/image";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { yotube_search_key } from "../Utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery]= useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  
  
  
  // console.log( searchQuery);

  useEffect(() => {


    //to use debouncing 
    //make an api call after every key press
    //if the difference between 2 api calls is less than 200
    //decline the api call
   const timer =  setTimeout(() =>   getSearchSuggestions(), 3000)
   return () => {
    clearTimeout(timer)
   }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(yotube_search_key + searchQuery)
    const json = await data.json();
    // console.log("js", json);
    setSuggestion(json[1])
  }



  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
  <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
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
        <div>
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full px-5 "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
        />
        <button className="border border-gray-500 bg-gray-100 px-5  py-2 rounded-r-full">
          🔍
        </button>
        
        </div>
      {showSuggestion &&  <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-300">
        <ul>
        {suggestion.map((s) =>  <li  key = {s} className="py-2 shadow-sm px-3 hover:bg-gray-100">🔍 {s}</li> )}
        </ul>
        </div>}
      </div>
      
      <div>
        <img className="h-8 col-span-1" src={userIcon} alt="user-icon" />
      </div>
    </div>
  </div>
  );
};

export default Head;
