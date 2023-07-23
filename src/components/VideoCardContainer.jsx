import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useState } from "react";
import { YT_MOST_POPULAR_API } from "../../constant";
import { Link } from "react-router-dom";
const Body = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    const fetchMostPopularVideo = async () => {
      const data = await fetch(
        YT_MOST_POPULAR_API + import.meta.env.VITE_YT_API_KEY
      );
      const new_data = await data.json();
      setVideoList(new_data.items);
      console.log(new_data.items);
    };
    fetchMostPopularVideo();
  }, []);

  // if data is not fetched
  if (!videoList) {
    return <div className="flex justify-center text-2xl">Loading...</div>;
  }

  return (
    <div className="   h-[90%] flex flex-row  flex-wrap overflow-x-scroll justify-around relative ">
      {videoList.map((item) => {
        // const { channelTitle, description, title, thumbnails } = item.snippet;
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoCard key={item.id} {...item.snippet} />;
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
