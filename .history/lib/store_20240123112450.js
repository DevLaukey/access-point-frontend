import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
      reducer: {
            user: userSlice.reducer,
            adminUser: adminUserSlice.reducer,
    },
  });
};
