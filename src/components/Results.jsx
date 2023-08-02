import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../constant";
import {
  YT_SEARCH_API,
  MOCK_API_SEARCH_DATA,
  SIDEBAR_WIDTH_REM,
} from "../../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const Results = () => {
  const dispatch = useDispatch();
  const [videoList, setVideoList] = useState(null);
  let [searchQuery] = useSearchParams();
  const substractWidth = useSelector(
    (store) => store.menuState.sideBarWidthInRem
  );
  searchQuery = searchQuery.get("search_query");
  const url =
    YT_SEARCH_API +
    "&q=" +
    searchQuery +
    "&key=" +
    import.meta.env.VITE_YT_API_KEY;

  useEffect(() => {
    fetchData(url, setVideoList);
  }, [url]);

  if (!videoList) return <Loader />;
  return (
    <div
      className="absolute flex flex-wrap justify-around"
      style={{
        width: `calc(100% - ${substractWidth})`,
        marginLeft: `${substractWidth}`,
      }}
    >
      {videoList.map((item) => (
        <Link to={`/watch?v=${item.id.videoId}`} key={item.id.videoId}>
          <VideoCard {...item.snippet} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
