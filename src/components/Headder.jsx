import YoutubeLogo, {
  BellIcon,
  PlusIconsCircle,
  ProfileIcon,
} from "./AppIconsSvg";
import Ham from "../assets/hamburger.png";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import {
  toggleMenuVisibility,
  toggleSideBarWidthInRem,
} from "../utils/slices/hamBurgerSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// END OF IMPORTS
const Headder = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenuVisibility());
    dispatch(toggleSideBarWidthInRem());
  };
  return (
    <div className="w-[100vw] grid grid-cols-6 gap-2 shadow-lg fixed top-0 left-0 bg-white z-50 ">
      {/* top Left */}
      <div className="flex mx-2 my-2 items-center">
        <ul className="flex [&>*]:h-10 [&>*]:w-10 space-x-2 [&>*]:cursor-pointer">
          <li className="" onClick={() => handleClick()}>
            <img src={Ham} alt="I" />
          </li>
          <li className="md:h-20 md:w-20 h-16 w-16  ">
            <Link to={"/"}>
              <YoutubeLogo />
            </Link>
          </li>
        </ul>
      </div>

      {/* SearchBar */}
      <div className="col-span-4 flex items-center justify- center">
        <SearchBar />
      </div>
      {/* top Right*/}
      <div className="flex justify-end items-center mx-2">
        {/* <Logo /> */}

        <ul className="flex space-x-5 mr-4 [&>*]:cursor-pointer">
          <li>
            <PlusIconsCircle />
          </li>
          <li>
            <BellIcon />
          </li>
          <li>
            <ProfileIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headder;
