import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `${import.meta.data.VITE_SERVER}`;
console.log(url);

const fetchUser = createAsyncThunk("fetchUser/Get", () => {
  return axios.get(url).then((res) => res.json());
});

export const fetchUserSLice = createSlice({
  name: "fetchUserSLice",

  initialState: {
    user: [],
    isLoading: false,
    message: "",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
      state.message = "";
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.message = "";
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      (state.isLoading = false),
      state.message = action.error.message || "Request failed";
    });
  },
});
