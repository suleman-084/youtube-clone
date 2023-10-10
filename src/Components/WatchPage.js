import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log("seare", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col pl-[60px] py-[7rem] w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat/>

        </div>
      


      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
