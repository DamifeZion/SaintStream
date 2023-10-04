import("preline");
import "react-toastify/dist/ReactToastify.css";
import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/registration/LogIn";
import SignUp from "./pages/registration/SignUp";
import ForgotPassword from "./pages/registration/ForgotPassword";
import FindAccount from "./pages/registration/FindAccount";
import PasswordReset from "./pages/registration/PasswordReset";
import { useSessionLogin } from "./hooks/useSessionLogin";
import { NotFound } from "./pages/NotFound";
//Auth middleWare
import { RequireAuth } from "./utils/RequireAuth";
//Auth pages import
import MovieLibrary from "./pages/auth/MovieLibrary";


function App() {
  //fetch user Data from DB
  const { useIsUserLoggedin } = useSessionLogin();
  useLayoutEffect(() => {
    useIsUserLoggedin();
  }, [useIsUserLoggedin]);

  return (
    <div id="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/find_account" element={<FindAccount />} />
        <Route path="/password_reset" element={<PasswordReset />} />

        <Route
          path="/movie_library"
          element={
            <RequireAuth>
              <MovieLibrary />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
