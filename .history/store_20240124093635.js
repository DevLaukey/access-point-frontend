import { configureStore } from "@reduxjs/toolkit";
import { setAdminUserDetails } from "./lib/users/userSlice";

export const store = configureStore({
  reducer: {
    'addAdmin': setAdminUserDetails,
  },
});
