import { configureStore } from "@reduxjs/toolkit";
import { setAdminUserDetails } from "./users/userSlice";

export const store = configureStore({
  reducer: {
    addAdmin: setAdminUserDetails,
  },
});
