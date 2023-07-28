import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");
  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return (
    <div className="w-screen px-10 absolute mt-4">
      <div className="w-full flex relative">
        <iframe
          className="w-2/3"
          height="515"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="w-1/3 flex flex-col ">
          <div className="border border-black mx-6  h-[515px] rounded-md flex flex-1  ">
            <LiveChatContainer />
          </div>
          {/* input tag container */}
          <div className="mx-6 border border-black border-t-0 p-2 rounded-md space-x-2">
            <input
              type="text"
              name=""
              id=""
              className="w-[80%] border-b border-black focus:outline-none"
            />
            <button className="border border-black  bg-green-500 rounded-md px-2 mx ">
              Send
            </button>
          </div>
          {/* hide button container */}
          <div className="flex justify-center mx-6 border border-black border-t-0 p-2">
            <button className="hover:bg-slate-500 rounded-lg w-full ">Toggle Visibility</button>
          </div>
        </div>
      </div>
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
