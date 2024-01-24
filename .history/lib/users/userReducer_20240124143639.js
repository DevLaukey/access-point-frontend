import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  idNumber: 0,
  firstName: "",
  lastName: "",
  arrivalTime: "",
  departureTime: "",
  fingerprintTemplate: "",
  firstFingerprintCaptured: false,
  error: null,
};


const userReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setFirstFingerprintCaptured: (state, {isCaptured, fingerprintTemplate}) => {
      state.firstFingerprintCaptured = isCaptured;
      state.fingerprintTemplate = fingerprintTemplate;
    },
    setArrivalTime: (state) => { 
      state.arrivalTime = Date.now();
    },

    setUserDetails: (state, action) => {
      const {
        idNumber,
        firstName,
        lastName,
        arrivalTime,
        departureTime,
        fingerprintTemplate,
      } = action.payload;
      state.idNumber = idNumber;
      state.firstName = firstName;
      state.lastName = lastName;
      state.arrivalTime = arrivalTime;
      state.departureTime = departureTime;

      state.fingerprintTemplate = fingerprintTemplate;
    },
  },
});

export const { setFingerprintCaptured,setArrivalTime, setUserDetails } = userReducer.actions;

export default userReducer.reducer;
