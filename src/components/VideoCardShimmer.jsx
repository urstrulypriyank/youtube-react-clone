import { useSelector } from "react-redux";
const VideoCard = () => {
  return (
    <div className="flex flex-col border shadow-lg w-[300px] h-40 rounded-lg my-4 mx-4 ">
      <div className="relative h-[90%] w-full bg-gray-500 rounded-lg rounded-b-none "></div>
      <div className="mt-1">
        <p className="w-1/2 mb-2 h-3 animate-pulse bg-gray-500"></p>
        <p className="leading-relaxed mb-2 w-full h-3 animate-pulse bg-gray-400"></p>
        <p className="leading-relaxed mb-2 w-2/3 h-2 animate-pulse bg-gray-400"></p>
      </div>
    </div>
  );
};

const VideoCardList = () => {
  const substractWidht = useSelector(
    (store) => store.menuState.sideBarWidthInRem
  );
  let arr = new Array(18).fill(0, 0, 19);
  return (
    <div
      className="w-full h-full flex flex-1 flex-wrap justify-around"
      style={{
        width: `calc(100% - ${substractWidht})`,
        marginLeft: `${substractWidht}`,
      }}
    >
      {arr.map((item, index) => (
        <div key={index}>
          <VideoCard />
        </div>
      ))}
    </div>
  );
};
export default VideoCardList;
