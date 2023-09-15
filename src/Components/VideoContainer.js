import React, { useEffect, useState } from "react";
import { youtube_api_key } from "../Utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtube_api_key);
    const json = await data.json();
    setVideos(json.items);

    // console.log("data", json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
