import { useSelector } from "react-redux";
import ButtonLIst from "./ButtonLIst";
import VideoCardContainer from "./VideoCardContainer";
import store from "../utils/store";
const HomePageBody = () => {
  const substractWidht = useSelector(
    (store) => store.menuState.sideBarWidthInRem
  );
  return (
    <>
      <div
        className="absolute flex flex-wrap -z-50  "
        style={{
          width: `calc(100% - ${substractWidht})`,
          marginLeft: `${substractWidht}`,
        }}
      >
        <ButtonLIst />
        <VideoCardContainer />
      </div>
    </>
  );
};
export default HomePageBody;
