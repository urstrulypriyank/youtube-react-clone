import { useSelector } from "react-redux";
import store from "../utils/store";

const Sidebar = () => {
  const isMenuVisible = useSelector((store) => store.menuState.isMenuVisible);
  if (!isMenuVisible) return null;
  return (
    <section className="w-[16vw] h-[100vw] bg-slate-300">
      <ul
        className="flex flex-col flex-1 items-start  px-4 [&>*]:py-2 [&>*]:my-0.5 group/li group-hover/li:bg-red-500 "
        id="sidebar-list"
      >
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Sidebar;
