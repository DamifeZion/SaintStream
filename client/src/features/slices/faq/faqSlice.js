import { createSlice } from "@reduxjs/toolkit";

export const faqSlice = createSlice({
  name: "faqSlice",

  initialState: {
    selectedIndex: null,
    showDropdown: false,
  },

  reducers: {
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },

    setShowDropdown: (state) => {
      state.showDropdown = !state.showDropdown;
    },

    reset: (state) => {
      (state.selectedIndex = null), (state.showDropdown = false);
    },
  },
});
