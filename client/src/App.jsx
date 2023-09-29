import("preline");
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/unAuthed/Home";
import LogIn from "./pages/unAuthed/registration/LogIn";
import SignUp from "./pages/unAuthed/registration/SignUp";
import ForgotPassword from "./pages/unAuthed/registration/ForgotPassword";
import FindAccount from "./pages/unAuthed/registration/FindAccount";
import PasswordReset from "./pages/unAuthed/registration/PasswordReset";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/find_account" element={<FindAccount />} />
        <Route path="/password_reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
