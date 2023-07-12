import YoutubeLogo, {
  BellIcon,
  PlusIconsCircle,
  ProfileIcon,
} from "./AppIconsSvg";
import Ham from "../assets/hamburger.png";
import SearchBar from "./SearchBar";
const Headder = () => {
  return (
    <div className="w-[100vw] grid grid-cols-6 gap-2 shadow-lg  ">
      {/* top Left */}
      <section className="flex mx-2 my-2 items-center">
        <ul className="flex [&>*]:h-10 [&>*]:w-10 space-x-2 [&>*]:cursor-pointer">
          <li className="">
            <img src={Ham} alt="I" />
          </li>
          <li className="h-20 w-20">
            <YoutubeLogo />
          </li>
        </ul>
      </section>

      {/* SearchBar */}
      <section className="col-span-4 flex items-center justify-center">
        <SearchBar />
      </section>
      {/* top Right*/}
      <section className="flex justify-end items-center mx-2">
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
      </section>
    </div>
  );
};

export default Headder;
