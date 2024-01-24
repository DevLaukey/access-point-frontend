import { configureStore } from "@reduxjs/toolkit";
import setUserDetails from "./users/userReducer";
import  setAdminUserDetails  from "./users/adminUserReducer";

export const store = configureStore({
  reducer: {
   admin: setAdminUserDetails,
   user: setUserDetails,
  },
});
