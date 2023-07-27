import { useEffect, useState } from "react";
import { comment_mock_data, fetchData } from "../../constant";
import { YT_COMMENT_API } from "../../constant";
import CommentsCard from "./CommentsCard";
const CommentsContainer = ({ videoId }) => {
  const [commentList, setCommentList] = useState([]);
  const url =
    YT_COMMENT_API +
    "&videoId=" +
    videoId +
    "&key=" +
    import.meta.env.VITE_YT_API_KEY;
  useEffect(() => {
    // fetchData(url, setCommentList);
    setCommentList(comment_mock_data);
  }, [url]);
  if (!commentList) return <div>Loading...</div>;
  // console.log(commentList);
  return (
    <div className="absolute border border-black shadow-md mt-3 left-0 ml-1 w-[40%] space-y-2 ">
      <h3 className="font-bold text-xl p-2">Comments</h3>
      {commentList.map((item) => {
        const { authorDisplayName, authorProfileImageUrl, textDisplay } =
          item?.snippet?.topLevelComment?.snippet;
        const replies = item?.replies?.comments;
        let props = {
          authorDisplayName,
          authorProfileImageUrl,
          textDisplay,
          replies,
        };

        return (
          <div
            className="pl-2 bg-gray-400 relative w-full overflow-auto "
            key={item.id}
          >
            <CommentsCard {...props} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentsContainer;
