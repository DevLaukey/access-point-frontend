import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idNumber: 0,
  firstName: "",
  lastName: "",
  arrivalTime: "",
  departureTime: "",
  fingerprintTemplate: "",
  firstFingerprintCaptured: false,
  captureComplete: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setFirstFingerprintCaptured: (state, action) => {
      state.firstFingerprintCaptured = action.payload.isCapture;
      state.fingerprintTemplate = action.payload.fingerprintTemplate;
    },
    setFingerprintCaptureComplete: (state) => {
      state.arrivalTime = Date.now();
      state.captureComplete = true;
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
    saveUserDetail: (state, action) => {},
    clearTemplate: (state, action) => {
      state.fingerprintTemplate = "";
      state.captureComplete = false;
      state.firstFingerprintCaptured = false;
      state.arrivalTime = "";
    
    }
  },
});

export const {
  setFirstFingerprintCaptured,
  setFingerprintCaptureComplete,
  setUserDetails,
  clearTemplate
} = userSlice.actions;

export default userSlice.reducer;
