import { createSlice } from "@reduxjs/toolkit";

export const mobileNavSlice = createSlice({
  name: "mobileNavSlice",

  initialState: {
    showMainMenu: false,
  },

  reducers: {
    setShowMainMenu: (state) => {
      state.showMainMenu = !state.showMainMenu;
    },
  },
});
