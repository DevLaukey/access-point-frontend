import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        firstName: '',
        lastName: '',
        arrivalTime: '',
        departureTime: '',
        fingerprintTemplate: '',
    },
    reducers: {
        setUserDetails: (state, action) => {
            const { email, firstName, lastName, arrivalTime, departureTime, fingerprintTemplate } = action.payload;
            state.email = email;
            state.firstName = firstName;
            state.lastName = lastName;
            state.arrivalTime = arrivalTime;
            state.departureTime = departureTime;
            state.fingerprintTemplate = fingerprintTemplate;
        },
    },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
