import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  idNumber: 0,
  firstName: "",
  lastName: "",
  arrivalTime: "",
  departureTime: "",
  fingerprintTemplate: "",
  fingerprintCaptured: false,
  loading: false,
  error: null,
};
const userSlice = createSlice(
 
  {
    name: "user",
    initialState: initialState,
    reducers: {
      setFingerprintCaptured: (state, action) => { 
        state.fingerprintCaptured = action.payload;
      },
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