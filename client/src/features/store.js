import { configureStore } from "@reduxjs/toolkit";

//Slices
import { userSlice } from "./slices/userSlice/userSlice";
import { faqSlice } from "./slices/faq/faqSlice";
import { mobileNavSlice } from "./slices/mobileNavSlice/mobileNavSlice";
import { loginSlice } from "./slices/loginSlice/loginSlice";
import { signUpSlice } from "./slices/signUpSlice/signUpSlice";
import { forgotPasswordSlice } from "./slices/forgotPasswordSlice/forgotPasswordSlice";
import { passwordResetSlice } from "./slices/passwordResetSlice/passwordResetSlice.js";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    faqSlice: faqSlice.reducer,
    mobileNavSlice: mobileNavSlice.reducer,
    loginSlice: loginSlice.reducer,
    signUpSlice: signUpSlice.reducer,
    forgotPasswordSlice: forgotPasswordSlice.reducer,
    passwordResetSlice: passwordResetSlice.reducer,
  },
});

export default store;
