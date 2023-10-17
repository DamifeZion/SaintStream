import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    user: null,
    sessionToken: null,
  },

  reducers: {
    setSessionToken: (state, action) => {
      state.sessionToken = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    logOut: (state) => {
      state.user = null;
      state.sessionToken = null;
      useSessionStorage().removeSession(import.meta.env.VITE_SESSION_KEY);
    },
  },
});
