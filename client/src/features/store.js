import { configureStore } from "@reduxjs/toolkit";

//Slices
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
});

export default store;
