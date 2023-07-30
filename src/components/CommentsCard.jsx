const CommentsCard = ({
  authorDisplayName,
  authorProfileImageUrl,
  textDisplay,
  replies,
}) => {
  return (
    <>
      <div className="flex rounded-xl items-center space-x-3 my-4 pl-2 ">
        <img
          src={authorProfileImageUrl}
          alt="authorDisplayName[0]"
          className="w-7 h-7  rounded-full"
        />
        <h4 className="font-bold">@{authorDisplayName}</h4>
      </div>
      <p className="pl-10">{textDisplay}</p>
      {replies?.map((item) => {
        const { authorDisplayName, authorProfileImageUrl, textDisplay } =
          item?.snippet;
        const replies = item?.replies?.comments;
        let props = {
          authorDisplayName,
          authorProfileImageUrl,
          textDisplay,
          replies,
        };
        return (
          <div className=" ml-4 border border-l-black   " key={item.id}>
            <CommentsCard {...props} />
          </div>
        );
      })}
    </>
  );
};

export default CommentsCard;
