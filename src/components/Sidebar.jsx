import { useSelector } from "react-redux";
import store from "../utils/store";
const Sidebar = () => {
  const isMenuVisible = useSelector((store) => store.menuState.isMenuVisible);
  if (!isMenuVisible) return null;
  return (
    <section className=" h-[90vh] w-52 z-20 fixed bg-white shadow-lg ">
      <ul
        className="flex flex-col flex-1 items-start  px-4 [&>*]:py-2 [&>*]:my-0.5 group/li group-hover/li:bg-red-500 "
        id="sidebar-list"
      >
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Library</li>
      </ul>
    </section>
  );
};

export default Sidebar;
