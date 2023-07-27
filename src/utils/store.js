import { configureStore } from "@reduxjs/toolkit";
import hamBurgerSlice from "./slices/hamBurgerSlice";
import searchTextSlice from "./slices/searchTextSlice";
import searchCacheSlice from "./slices/searchCacheSlice";
import searchStateSlice from "./slices/searchStateSlice";
const store = configureStore({
  reducer: {
    menuState: hamBurgerSlice,
    searchText: searchTextSlice,
    searchCache: searchCacheSlice,
    searchState: searchStateSlice,
  },
});

export default store;
