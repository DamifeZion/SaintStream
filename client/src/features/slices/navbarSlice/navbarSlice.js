import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbarSlice",

  initialState: {
    showMainMenu: false,
    showUserMenu: false,
    showSearchBar: false,
    showProfileDropdown: false,
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

    toggleProfileDropdown: (state) => {
      state.showProfileDropdown = !state.showProfileDropdown;
    },
  },
});
