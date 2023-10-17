import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginSlice",

  initialState: {
    email: "",
    password: "",
    hidePassword: true,
  },

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setPasswordVisible: (state) => {
      state.hidePassword = !state.hidePassword;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    reset: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});
