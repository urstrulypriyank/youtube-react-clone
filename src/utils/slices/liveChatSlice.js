import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat slice",
  initialState: {
    message: [],
  },
  reducers: {
    push: (state, action) => {
      state.message.splice(24,1)
      state.message.unshift(action.payload);
    },
  },
});

export const { push } = liveChatSlice.actions;
export default liveChatSlice.reducer;
