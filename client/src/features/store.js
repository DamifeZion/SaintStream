import { configureStore } from "@reduxjs/toolkit";

//Slices
import { userSlice } from "./slices/userSlice";
import { faqSlice } from "./slices/faq/faqSlice";
import { mobileNavSlice } from "./slices/mobileNavSlice/mobileNavSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    faqSlice: faqSlice.reducer,
    mobileNavSlice: mobileNavSlice.reducer  
  },
});

export default store;
