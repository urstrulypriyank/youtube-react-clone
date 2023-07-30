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
    <div className="absolute shadow-xl mt-3 left-0  w-[60%] space-y-2 ml-10">
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
            className="pl-2 relative w-full overflow-auto my-4 shadow-gray-600 shadow-md py-2"
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
