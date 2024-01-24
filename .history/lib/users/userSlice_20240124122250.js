import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
  {
    name: "adminUser",
    initialState: {
      email: "",
      id: "",
      avatar_url: "",
      full_name: "",
    },
    reducers: {
      setAdminUserDetails: (state, action) => {
        // const { email, id, avatar_url, full_name } = action.payload;
        // state.email = email;
        // state.id = id;
        // state.avatar_url = avatar_url;
        // state.full_name = full_name;
      },
    },
  },
  {
    name: "user",
    initialState: {
      idNumber: 0,
      firstName: "",
      lastName: "",
      arrivalTime: "",
      departureTime: "",
      fingerprintTemplate: "",
    },
    reducers: {
        setUserDetails: (state, action) => {
            const { idNumber, firstName, lastName, arrivalTime, departureTime, fingerprintTemplate } = action.payload;
            state.idNumber = idNumber;
            state.firstName = firstName;
            state.lastName = lastName;
            state.arrivalTime = arrivalTime;
            state.departureTime = departureTime;
            state.fingerprintTemplate = fingerprintTemplate;
        }
    },
  }
);

export const { setAdminUserDetails, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
