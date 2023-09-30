import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authUtil } from "../../../utils/authUtil";

//the user token is critical tofetch the user data as a param
const initialState = {
  user: null,
  sessionToken: null,
  isLoading: false,
  message: "",
};
export const fetchUserThunk = createAsyncThunk(
  "fetchUserData/GET",
  async (_, { getState }) => {
    const { sessionToken } = getState().userSlice;
    const url = `${import.meta.env.VITE_SERVER}/user/${sessionToken}`;
    try {
      const res = await fetch(url);
      const userData = await res.json();
      console.log("userData ", userData.user);
      return userData;
    } catch (error) {
      throw new Error();
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

    setLogOut: (state) => {
      (state.user = null), (state.sessionToken = null);
      authUtil().removeTokenFromLocalStorage("SessionKey");
      window.location.href = "/";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })

      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message || "Successful";
        state.user = action.payload;
      })

      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message || "Failed to fetch";
      });
  },
});
