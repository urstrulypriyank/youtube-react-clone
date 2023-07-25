import { configureStore } from "@reduxjs/toolkit";
import hamBurgerSlice from "./slices/hamBurgerSlice";
import searchTextSlice from "./slices/searchTextSlice";
import searchCacheSlice from "./slices/searchCacheSlice";
const store = configureStore({
  reducer: {
    menuState: hamBurgerSlice,
    searchText: searchTextSlice,
    searchCache: searchCacheSlice,
  },
});

export default store;
