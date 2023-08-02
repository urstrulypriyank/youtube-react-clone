const VideoCard = ({ channelTitle, title, thumbnails }) => {
  return (
    <div className="w-[300px] rounded-lg border">
      <img
        src={thumbnails?.standard?.url || thumbnails?.medium?.url}
        alt={title + " thumbnail"}
        className="h-[170px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{channelTitle}</h1>
        <p className="mt-3 text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};
export default VideoCard;
