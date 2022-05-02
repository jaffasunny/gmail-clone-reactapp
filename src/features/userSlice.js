import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = mailSlice.actions;

export const selectUser = (state) => state.user.user;

export default mailSlice.reducer;
