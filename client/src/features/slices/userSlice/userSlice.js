import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token =
  "token from localStorage when user logs in which can be stored in temporarily as user and until this is completed then replaces";

const url = `${import.meta.env.VITR_SERVER}/user/${token}`;
// console.log(url);

const fetchUser = createAsyncThunk("fetchUser/Get", async () => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const userSlice = createSlice({
  name: "userSice",

  initialState: {
    user: null,
    isLoading: false,
    message: "",
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },
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
        (state.message = action.error.message || "Request failed");
    });
  },
});
