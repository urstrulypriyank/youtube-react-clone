import { useEffect, useState } from "react";
import store from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../utils/slices/searchTextSlice";
import {
  YT_SEARCH_SUGGESTION_API,
  YT_SEARCH_SUGGESTION_API2,
} from "../../constant";
import { setSearchCache } from "../utils/slices/searchCacheSlice";
import { Link, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { setShowSuggestion } from "../utils/slices/searchStateSlice";

//  EO IMPORT STATEMENTS
const SearchBar = () => {
  const [searchIconVisibility, setSetSearchIconVisibility] = useState(false);
  const [borderColor, setBorderColor] = useState("border-black");
  const dispatch = useDispatch();
  const searchText = useSelector((store) => store.searchText.searchText);
  const navigate = useNavigate();
  const showSuggestion = useSelector(
    (store) => store.searchState.showSuggestion
  );
  const [suggestionList, setSuggestionList] = useState(null);
  const [mouseOverSuggestionList, setMouseOverSuggestionList] = useState(null);
  const searchCache = useSelector((store) => store.searchCache.obj);
  const searchSuggestion = async () => {
    const data = await fetch(YT_SEARCH_SUGGESTION_API + searchText, {
      "Access-Control-Allow-Origin": "*",
    });
    const new_data = await data.json();
    dispatch(setSearchCache({ [searchText]: new_data[1] }));
    setSuggestionList(new_data[1]);
  };

  useEffect(() => {
    if (searchText.length == 0) {
      setSuggestionList(null);
      return;
    }
    if (searchCache[searchText]) {
      return setSuggestionList(searchCache[searchText]);
    }
    const timer = setTimeout(() => {
      searchSuggestion();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  // just to see it's working subscribing to redux store

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
    <>
      <form
        className="flex justify-center items-center mx-auto  "
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/results?search_query=" + searchText);
        }}
      >
        <div
          className={`border  ${borderColor}   rounded-l-2xl [&>*]:my-1 px-2 space-x-2 `}
        >
          {searchIconVisibility && <span>🔎</span>}
          <input
            type="text"
            className="outline-none w-[20vw] md:w-[40vw] "
            placeholder=" Search"
            id="search-box"
            onChange={(e) => {
              dispatch(setSearchText(e.target.value));
            }}
            onFocus={() => dispatch(setShowSuggestion(true))}
            onBlur={() => {
              if (mouseOverSuggestionList) dispatch(setShowSuggestion(true));
              else {
                dispatch(setShowSuggestion(false));
              }
            }}
          />
        </div>
        <button
          className="border border-black  rounded-2xl border-l-0 rounded-l-none px-4 py-1"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/results?search_query=" + searchText);
            dispatch(setShowSuggestion(false));
          }}
          onSubmit={() => navigate("/results?search_query=" + searchText)}
        >
          <Link to={"/results?search_query=" + searchText}>🔎</Link>
        </button>
        <div className="fixed left-0 top-14 my-0.5 w-screen z-50 border ">
          {showSuggestion && suggestionList && (
            <div
              className=" w-[40%] h-72  mx-auto bg-white rounded-xl px-4 py-1  "
              onFocus={() => dispatch(setShowSuggestion(true))}
              onMouseLeave={() => setShowSuggestion(false)}
              onMouseOver={() => {
                setMouseOverSuggestionList(true);
              }}
            >
              <ul className="">
                {suggestionList?.map((item) => (
                  <Link
                    to={"/results?search_query=" + item}
                    key={item}
                    onClick={() => dispatch(setShowSuggestion(false))}
                  >
                    <li
                      key={item}
                      className="space-x-6  flex flex-1 items-center"
                    >
                      <span>🔎</span>
                      <p className="flex items-center">{item}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
export default SearchBar;
