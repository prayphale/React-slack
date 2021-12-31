import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
    channelName: "",
  },

  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: { app: { roomId: string } }) =>
  state.app.roomId;
export const selectChannelName = (state: { app: { channelName: string } }) =>
  state.app.channelName;

export default appSlice.reducer;
