import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");
  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
