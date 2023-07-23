import { configureStore } from "@reduxjs/toolkit";
import hamBurgerSlice from "./slices/hamBurgerSlice";
import searchTextSlice from "./slices/searchTextSlice";

const store = configureStore({
  reducer: {
    menuState: hamBurgerSlice,
    searchText: searchTextSlice,
  },
});

export default store;
