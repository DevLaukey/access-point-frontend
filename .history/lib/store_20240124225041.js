// store.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./users/userReducer";
import adminReducer from "./users/adminUserReducer";
import {thunk} from "redux-thunk";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});
