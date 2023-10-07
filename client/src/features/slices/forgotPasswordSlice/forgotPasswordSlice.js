import { createSlice } from "@reduxjs/toolkit";

export const forgotPasswordSlice = createSlice({
  name: "forgotPasswordSlice",

  initialState: {
    email: "",
    isLoading: false,
  },

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    reset: (state) => {
      state.email = "";
      state.isLoading = false;
    },
  },
});
