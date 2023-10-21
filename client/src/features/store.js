import { configureStore } from "@reduxjs/toolkit";

//Slices
import { userSlice } from "./slices/userSlice/userSlice";
import { faqSlice } from "./slices/faq/faqSlice";
import { mobileNavSlice } from "./slices/mobileNavSlice/mobileNavSlice";
import { loginSlice } from "./slices/loginSlice/loginSlice";
import { signUpSlice } from "./slices/signUpSlice/signUpSlice";
import { forgotPasswordSlice } from "./slices/forgotPasswordSlice/forgotPasswordSlice";
import { passwordResetSlice } from "./slices/passwordResetSlice/passwordResetSlice.js";
import { userApi } from "./api/userApi";
import { pcNavbarSlice } from "./slices/pcNavBarSlice/pcNavbarSlice";

const store = configureStore({
  reducer: {
    //Slices
    userSlice: userSlice.reducer,
    faqSlice: faqSlice.reducer,
    mobileNavSlice: mobileNavSlice.reducer,
    pcNavbarSlice: pcNavbarSlice.reducer,
    loginSlice: loginSlice.reducer,
    signUpSlice: signUpSlice.reducer,
    forgotPasswordSlice: forgotPasswordSlice.reducer,
    passwordResetSlice: passwordResetSlice.reducer,

    //Apis
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
