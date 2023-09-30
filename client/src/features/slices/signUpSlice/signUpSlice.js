import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: "signUpSlice",

  initialState: {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
    hidePassword: true,
    hideConfirmPassword: true,
  },

  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },

    setPolicy: (state) => {
      state.policy = !state.policy;
    },

    setHidePassword: (state) => {
      state.hidePassword = !state.hidePassword;
    },

    setHideConfirmPassword: (state) => {
      state.hideConfirmPassword = !state.hideConfirmPassword;
    },

    reset: (state) => {
      state.userName = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.policy = false;
    },
  },
});
