import { createSlice } from "@reduxjs/toolkit";

export const mobileNavSlice = createSlice({
  name: "mobileNavSlice",

  initialState: {
    showMainMenu: false,
    showUserMenu: false,
    showSearchBar: false,
  },

  reducers: {
    setShowMainMenu: (state) => {
      state.showMainMenu = !state.showMainMenu;
      state.showUserMenu = false;
    },

    setShowUserMenu: (state) => {
      state.showMainMenu = false;
      state.showUserMenu = !state.showUserMenu;
    },

    setShowSearchBar: (state) => {
      state.showSearchBar = !state.showSearchBar;
    },
  },
});
