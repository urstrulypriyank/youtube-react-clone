import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchIconVisibility, setSetSearchIconVisibility] = useState(false);
  const [borderColor, setBorderColor] = useState("border-black");
  const [searchText, setSearchText] = useState(null);
  console.log(searchText);
  useEffect(() => {
    let searchBox = document.getElementById("search-box");
    const handleActiveSearchFocus = () => {
      setSetSearchIconVisibility(true);
      setBorderColor("border-red-700 ");
    };
    const handleInactiveSearchFocus = () => {
      setSetSearchIconVisibility(false);
      setBorderColor("border-black");
    };
    searchBox.addEventListener("focusin", handleActiveSearchFocus);
    searchBox.addEventListener("focusout", handleInactiveSearchFocus);
    return () => {
      searchBox.removeEventListener("focusin", handleActiveSearchFocus);
      searchBox.removeEventListener("focusout", handleInactiveSearchFocus);
    };
  }, []);

  return (
    <form className="flex justify-center items-center  ">
      <div
        className={`border  ${borderColor}   rounded-l-2xl [&>*]:my-1 px-2 space-x-2 `}
      >
        {searchIconVisibility && <span>🔎</span>}
        <input
          type="text"
          className="outline-none w-[40vw]"
          placeholder=" Search"
          id="search-box"
          onClick={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <button
        className="border border-black  rounded-2xl border-l-0 rounded-l-none px-4 py-1"
        type="submit"
        onClick={() => console.log("CLikced")}
      >
        🔎
      </button>
    </form>
  );
};
export default SearchBar;
