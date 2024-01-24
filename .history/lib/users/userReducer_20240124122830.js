import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  error: null,
};
const userSlice = createSlice(
 
  {
    name: "user",
    initialState: initialState,
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
