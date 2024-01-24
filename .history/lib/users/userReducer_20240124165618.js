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

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {

    setFirstFingerprintCaptured: (
      state,
      action
    ) => {
      state.firstFingerprintCaptured = action.payload.isCapture;
      state.fingerprintTemplate = action.payload.fingerprintTemplate;
    },

    setArrivalTime: (state, action) => {
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
    }
  }
});

export const {setArrivalTime,setFirstFingerprintCaptured,setUserDetails } =
  userSlice.actions;

export default userSlice.reducer;
