import("preline");
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
//Guest Pages Import
import Home from "./pages/Home";
import LogIn from "./pages/registration/LogIn";
import SignUp from "./pages/registration/SignUp";
import ForgotPassword from "./pages/registration/ForgotPassword";
import FindAccount from "./pages/registration/FindAccount";
import PasswordReset from "./pages/registration/PasswordReset";
//General Pages
import NotFound from "./pages/NotFound";
//Auth middleWare
import { UserAuth } from "./middleWare/UserAuth";
import { GuestAuth } from "./middleWare/GuestAuth";
//User Pages Import
import MovieLibrary from "./pages/auth/MovieLibrary";
import usePasswordResetEmailTimer from "./hooks/usePasswordResetEmailTimer";

function App() {
  //below removes the email to reset after expiration
  usePasswordResetEmailTimer();

  return (
    <div id="App">
      <Routes>
        <Route
          index
          element={
            <GuestAuth>
              <Home />
            </GuestAuth>
          }
        />

        <Route
          path="/login"
          element={
            <GuestAuth>
              <LogIn />
            </GuestAuth>
          }
        />

        <Route
          path="/register"
          element={
            <GuestAuth>
              <SignUp />
            </GuestAuth>
          }
        />

        <Route
          path="/forgot_password"
          element={
            <GuestAuth>
              <ForgotPassword />
            </GuestAuth>
          }
        />

        <Route
          path="/find_account"
          element={
            <GuestAuth>
              <FindAccount />
            </GuestAuth>
          }
        />

        <Route
          path="/password_reset/:id"
          element={
            <GuestAuth>
              <PasswordReset />
            </GuestAuth>
          }
        />

        <Route
          path="/movie_library"
          element={
            <UserAuth>
              <MovieLibrary />
            </UserAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
