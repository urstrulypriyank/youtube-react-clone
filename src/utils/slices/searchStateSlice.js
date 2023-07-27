import { createSlice } from "@reduxjs/toolkit";

const searchStateSlice = createSlice({
  name: "searchStateVariables",
  initialState: {
    searchIconVisiblity: false,
    showSuggestion: false,
  },
  reducers: {
    setSearchIconVisiblity: (state, action) => {
      state.searchIconVisiblity = action.payload;
    },
    setShowSuggestion: (state, action) => {
      state.showSuggestion = action.payload;
    },
  },
});
export const { setSearchIconVisiblity, setShowSuggestion } =
  searchStateSlice.actions;
export default searchStateSlice.reducer;
