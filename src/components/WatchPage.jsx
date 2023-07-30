import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";
import { push, toggleChatVisiblity } from "../utils/slices/liveChatSlice";
import store from "../utils/store";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const [textInput, setTextInput] = useState("");
  const isChatVisible = useSelector((store) => store.chat.isChatVisible);
  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return (
    <div className="w-screen px-10 absolute mt-4">
      <div className="w-full flex relative h-[515px]">
        <iframe
          className="w-2/3"
          height="515"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* chat section */}
        <div className="w-1/3 flex flex-col max-h-[515px] ">
          {!isChatVisible && (
            <>
              <div className="border border-black mx-6  rounded-md  ">
                <LiveChatContainer />
              </div>

              {/* input tag container */}
              <form className="mx-6 border border-black border-t-0 border-b-0 p-2 rounded-md space-x-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[80%] border-b border-black focus:outline-none"
                  onChange={(e) => setTextInput(e.target.value)}
                />
                <button
                  className="border border-black border-b-0  bg-green-500 rounded-md px-2 mx "
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(push(textInput));
                  }}
                  type="submit"
                >
                  Send
                </button>
              </form>
            </>
          )}
          {/* hide button container */}
          <div className="flex justify-center mx-6 border border-black  p-2 ">
            <button
              className="hover:bg-slate-500 rounded-lg w-full "
              onClick={() => dispatch(toggleChatVisiblity())}
            >
              Toggle Visibility
            </button>
          </div>
        </div>
      </div>
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
