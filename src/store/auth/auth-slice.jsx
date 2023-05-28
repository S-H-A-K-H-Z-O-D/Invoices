import { createSlice } from "@reduxjs/toolkit";

export const { actions: loginAction, reducer: loginReducer } = createSlice({
  initialState: {
    value: 0,
  },
  name: "login",
  reducers: {
    onLogin(state) {
      state.value = state.value + 1;
    },
  },
});
