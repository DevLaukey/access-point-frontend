import { configureStore } from "@reduxjs/toolkit";
import {setUserDetails, setAdminUserDetails } from "./users/userSlice";

export const store = configureStore({
  reducer: {
    setAdminUserDetails,
    setUserDetails,
  },
});
