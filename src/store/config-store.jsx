import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./auth/auth-slice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
