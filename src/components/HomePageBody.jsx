import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ButtonLIst from "./ButtonLIst";
import VideoCardContainer from "./VideoCardContainer";
import store from "../utils/store";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
const HomePageBody = () => {
  const substractWidht = useSelector(
    (store) => store.menuState.sideBarWidthInRem
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu(true));
  }, []);
  console.log(import.meta.env.VITE_YT_API_KEY);
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
