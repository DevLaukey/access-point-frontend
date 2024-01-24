import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  avatar_url: "",
  full_name: "",
  loading: false,
  error: null,
};

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: initialState,
  reducers: {
    setAdminUserDetails: (state, action) => {
      const { email, id, avatar_url, full_name } = action.payload;
      state.email = email;
      state.id = id;
      state.avatar_url = avatar_url;
      state.full_name = full_name;
    },
  },
});

export const { setAdminUserDetails } =
  adminUserSlice.actions;

export default adminUserSlice.reducer;
