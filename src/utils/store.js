import { configureStore } from "@reduxjs/toolkit";
import hamBurgerSlice from "./slices/hamBurgerSlice";
import searchTextSlice from "./slices/searchTextSlice";
import searchCacheSlice from "./slices/searchCacheSlice";
import searchStateSlice from "./slices/searchStateSlice";
import liveChatSlice from "./slices/liveChatSlice";
const store = configureStore({
  reducer: {
    menuState: hamBurgerSlice,
    searchText: searchTextSlice,
    searchCache: searchCacheSlice,
    searchState: searchStateSlice,
    chat: liveChatSlice,
  },
});

export default store;
