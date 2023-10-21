import { createSlice } from "@reduxjs/toolkit";

export const pcNavbarSlice = createSlice({
  name: "pcNavbarSlice",

  initialState: {
    showProfileDropdown: false,
  },

  reducers: {
    toggleProfileDropdown: (state) => {
      state.showProfileDropdown = !state.showProfileDropdown;
    },
  },
});
