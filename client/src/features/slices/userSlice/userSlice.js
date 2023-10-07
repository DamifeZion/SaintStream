import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import axios from "axios";

//the user token is critical tofetch the user data as a param
const initialState = {
  user: null,
  sessionToken: null,
  isLoading: false,
  success: false,
  message: "",
};

export const fetchUserDataThunk = createAsyncThunk(
  "fetchUserData/GET",
  async (_, { getState }) => {
    const { sessionToken } = getState().userSlice;
    if (!sessionToken) {
      return null;
    }

    try {
      const url = `${import.meta.VITE_SERVER}/user/${sessionToken}`;
      const res = await axios.get(url);
      return res.data.user;
    } catch (error) {
      throw error.message;
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",

  initialState,

  reducers: {
    setSessionToken: (state, action) => {
      state.sessionToken = action.payload;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },

    logOut: (state) => {
      state.user = null;
      state.sessionToken = null;
      useLocalStorage().removeToken("Session");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDataThunk.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })

      .addCase(fetchUserDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.message || "Successfull";
        state.user = action.payload;
      })

      .addCase(fetchUserDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.sessionToken = null;
        state.success = "";
        state.message = action.payload.error || "Failed to fetch";
      });
  },
});
