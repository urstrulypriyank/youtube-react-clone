import { configureStore } from "@reduxjs/toolkit";
import hamBurgerSlice from "./slices/hamBurgerSlice";

const store = configureStore({
  reducer: {
    menuState: hamBurgerSlice,
  },
});

export default store;
