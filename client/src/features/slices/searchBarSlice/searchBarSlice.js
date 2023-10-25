import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchSlice",

  initialState: {
    searchValue: "",
    isLoading: false,
    showSearchResult: false,
  },

  reducers: {
    setSearchValue: (state, action) => {
      state.showSearchResult = true;
      state.searchValue = action.payload;
    },

    setSearchResult: (state) => {
      state.showSearchResult = false;
      console.log(state.showSearchResult);
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchValue, setIsLoading, setSearchResult } =
  searchBarSlice.actions;
