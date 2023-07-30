import { useEffect } from "react";
import { genrateRandomString } from "../utils/middleware/helper";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { push } from "../utils/slices/liveChatSlice";
const LiveChatContainer = () => {
  const msg = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  // logic for api pooling
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(push(genrateRandomString(12)));
    }, 700);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[27rem] overflow-scroll-y ">
      <p className=" font-bold border-b border-black w-full text-center">
        Live Chat
      </p>
      <div className="w-full h-[90%] space-y-2 my-2  overflow-y-scroll px-2 [&>*]:bg-gray-100 [&>*]:shadow-md flex flex-col-reverse ">
        {/* do not use index as key as it is bad practice i am using because of local dummy data in api always use unique id as key */}

        {msg?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default LiveChatContainer;
