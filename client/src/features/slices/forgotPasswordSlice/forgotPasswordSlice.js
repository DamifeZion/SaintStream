import { createSlice } from "@reduxjs/toolkit";

export const forgotPasswordSlice = createSlice({
  name: "forgotPasswordSlice",

  initialState: {
    email: "",
  },

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    reset: (state) => {
      state.email = "";
    },
  },
});
