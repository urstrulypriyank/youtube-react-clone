import { createSlice } from "@reduxjs/toolkit";
import { SIDEBAR_WIDTH_REM } from "../../../constant";
const hamBurgerSlice = createSlice({
  name: "hamBurgerSlice",
  initialState: {
    isMenuVisible: true,
    sideBarWidthInRem: SIDEBAR_WIDTH_REM,
  },
  reducers: {
    toggleMenuVisibility: (state) => {
      state.isMenuVisible = !state.isMenuVisible;
    },
    toggleSideBarWidthInRem: (state) => {
      if (state.sideBarWidthInRem === SIDEBAR_WIDTH_REM)
        state.sideBarWidthInRem = "0rem";
      else state.sideBarWidthInRem = SIDEBAR_WIDTH_REM;
    },
    hideMenu: (state, action) => {
      if (action.payload == undefined) state.isMenuVisible = false;
      else state.isMenuVisible = action.payload;
    },
  },
});
export const { toggleMenuVisibility, toggleSideBarWidthInRem, hideMenu } =
  hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;
