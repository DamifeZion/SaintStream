import { createSlice } from "@reduxjs/toolkit";

export const passwordResetSlice = createSlice({
  name: "passwordResetSlice",

  initialState: {
    password: "",
    confirmPassword: "",
    hidePassword: true,
    hideConfirmPassword: true,
    isLoading: false,
  },

  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },

    setHidePassword: (state) => {
      state.hidePassword = !state.hidePassword;
    },

    setHideConfirmPassword: (state) => {
      state.hideConfirmPassword = !state.hideConfirmPassword;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    reset: (state) => {
      state.password = "";
      state.confirmPassword = "";
      state.hidePassword = true;
      state.hideConfirmPassword = true;
      state.isLoading = false;
    },
  },
});
