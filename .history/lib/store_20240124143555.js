import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userReducer";
import  setAdminUserDetails  from "./users/adminUserReducer";

export const store = configureStore({
  reducer: {
   admin: setAdminUserDetails,
   user: userReducer,
  },
});
