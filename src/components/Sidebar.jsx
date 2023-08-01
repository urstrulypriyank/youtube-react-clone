import { useSelector } from "react-redux";
import store from "../utils/store";
// import { sideBarData } from "../../constant";
import { sideBarData } from "../../config";
const Sidebar = () => {
  const isMenuVisible = useSelector((store) => store.menuState.isMenuVisible);
  if (!isMenuVisible) return null;
  return (
    <section className=" h-[90vh] w-52 z-20  bg-white shadow-xl fixed ">
      <table
        className="mx-2 my-4 px-4  w-full table-auto h-full overflow-y-scroll "
        id="sidebar-list"
      >
        <tbody className=" space-y-2 h-full   space-x-2">
          {sideBarData.map(({ itemName, path }) => (
            <tr key={itemName} className="ml-2 my-5 hover:bg-gray-400  ">
              <td className="w-6 h-6 ">{path()}</td>
              <td>{itemName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Sidebar;
