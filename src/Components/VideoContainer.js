import React, { useEffect } from "react";
import { youtube_api_key } from "../Utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtube_api_key);
    const json = await data.json();
    console.log("data", json);
  };
  return (
    <div>
      <h1>video</h1>
    </div>
  );
};

export default VideoContainer;
