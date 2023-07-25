import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {
    obj: {},
  },
  reducers: {
    setSearchCache: (state, action) => {
      state.obj = { ...action.payload, ...state.obj };
    },
  },
});
export const { setSearchCache } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
