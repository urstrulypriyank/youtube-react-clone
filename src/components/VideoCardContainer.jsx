import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useState } from "react";
import { YT_MOST_POPULAR_API } from "../../constant";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Body = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    const url = YT_MOST_POPULAR_API + import.meta.env.VITE_YT_API_KEY;

    const fetchMostPopularVideo = async () => {
      try {
        const data = await fetch(url, {
          "Access-Control-Allow-Origin": "*",
        });
        const new_data = await data.json();
        setVideoList(new_data.items);
      } catch (error) {
        console.log("error occured", error);
      }
    };
    fetchMostPopularVideo();
  }, []);

  // if data is not fetched
  if (!videoList) {
    return <Loader />;
  }

  return (
    <div className="   h-[90%] flex flex-row  flex-wrap overflow-x-scroll justify-around relative w-full rounded-lg shadow-md my-2">
      {videoList.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoCard key={item.id} {...item.snippet} />
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
