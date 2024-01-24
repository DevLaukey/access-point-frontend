import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userReducer";
import  adminReducer  from "./users/adminUserReducer";

export const store = configureStore({
  reducer: {
   admin: adminReducer,
   user: userReducer,
  },
});
