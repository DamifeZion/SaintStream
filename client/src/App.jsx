import("preline");
import "react-toastify/dist/ReactToastify.css";
import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/unAuthed/Home";
import LogIn from "./pages/unAuthed/registration/LogIn";
import SignUp from "./pages/unAuthed/registration/SignUp";
import ForgotPassword from "./pages/unAuthed/registration/ForgotPassword";
import FindAccount from "./pages/unAuthed/registration/FindAccount";
import PasswordReset from "./pages/unAuthed/registration/PasswordReset";
import { useSessionLogin } from "./hooks/useSessionLogin";

function App() {
  //fetch user Data from DB
  const { useLogin } = useSessionLogin();
  useLayoutEffect(() => {
    useLogin();
  }, [useLogin]);

  return (
    <div id="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/login" || "/Login"} element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/find_account" element={<FindAccount />} />
        <Route path="/password_reset" element={<PasswordReset />} />
        <Route path="*" element={"404 Page not Found"} />
      </Routes>
    </div>
  );
}

export default App;
