import { createSlice } from "@reduxjs/toolkit";

const hamBurgerSlice = createSlice({
  name: "hamBurgerSlice",
  initialState: {
    isMenuVisible: true,
  },
  reducers: {
    toggleMenuVisibility: (state) => {
      state.isMenuVisible = !state.isMenuVisible;
    },
  },
});
export const { toggleMenuVisibility } = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;
