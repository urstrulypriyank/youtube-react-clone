import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat slice",
  initialState: {
    message: [],
  },
  isChatVisible: true,
  reducers: {
    push: (state, action) => {
      state.message.splice(24, 1);
      state.message.unshift(action.payload);
    },
    toggleChatVisiblity: (state) => {
      state.isChatVisible = !state.isChatVisible;
    },
  },
});

export const { push, toggleChatVisiblity } = liveChatSlice.actions;
export default liveChatSlice.reducer;
