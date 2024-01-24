import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userReducer";
import  adminReducer  from "./users/adminUserReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
export const store = configureStore({
  reducer: {
   admin: adminReducer, 
   user: userReducer,
  },
}, applyMiddleware(thunk));
