import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    'addAdmin': userReducer,
  },
})
