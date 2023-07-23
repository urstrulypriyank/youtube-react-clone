import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
  name: "Search Text Value",
  initialState: {
    searchText: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});
export const { setSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
