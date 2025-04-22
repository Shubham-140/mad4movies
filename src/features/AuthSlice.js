import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    showPopup: false,
    loginWindow: false,
    signupWindow: false,
    resetEmail: '',
    userMenuSelected: false
}

export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        setShowPopup: (state, action) => {
            state.showPopup = action.payload;
        },
        setLoginWindow: (state, action) => {
            state.loginWindow = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setSignupWindow: (state, action) => {
            state.signupWindow = action.payload;
        },
        setResetEmail: (state, action) => {
            state.resetEmail = action.payload;
        },
        setUserMenuSelected: (state, action) => {
            state.userMenuSelected = action.payload;
        }
    }
})

export const { setShowPopup, setLoginWindow, setIsLoggedIn, setSignupWindow, setResetEmail, setUserMenuSelected } = AuthSlice.actions;
export default AuthSlice.reducer;