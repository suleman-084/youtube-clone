import React, { useEffect, useState } from "react";
import { menuIcon, userIcon, logoIcon } from "../Utils/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { yotube_search_key } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { google_api_key } from "../Utils/constants";




const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch();

  const search = async () => {
    if (searchQuery.trim() === "") {
      getSearchSuggestions(searchQuery);
      return alert("Please enter a search query");
    }

    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&q=${searchQuery}&regionCode=IN&key=${google_api_key}`);
      const data = await response.json();

    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };



  // console.log( searchQuery);

  useEffect(() => {


    //to use debouncing 
    //make an api call after every key press
    //if the difference between 2 api calls is less than 200
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      } else {
        getSearchSuggestions()

      }

    }, 200)


    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(yotube_search_key + searchQuery)
    const json = await data.json();
    // console.log("js", json);
    setSuggestion(json[1])
    dispatch(
      cacheResults({
        query: searchQuery, // Provide the query as a key in the payload
        results: json[1], // Provide the search results as a value in the payload
      })
    );
  }




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
              onBlur={() => setShowSuggestion(false)}
            />
            <button onClick={() => search()} className="border border-gray-500 bg-gray-100 px-5  py-2 rounded-r-full">
              🔍
            </button>

          </div>
          {showSuggestion && <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-300">
            <ul>
              {suggestion.map((s) => <li key={s} className="py-2 shadow-sm px-3 hover:bg-gray-100">🔍 {s}</li>)}
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
