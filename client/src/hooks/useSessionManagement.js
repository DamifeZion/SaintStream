import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../features/slices/userSlice/userSlice";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useSessionStorage } from "./useSessionStorage";

export const useSessionManagement = () => {
  const dispatch = useDispatch();
  const { getSession } = useSessionStorage();
  const { sessionExpired } = useSelector((state) => state.userSlice);

  const manageSession = () => {
    const session = getSession(import.meta.env.VITE_SESSION_KEY);

    if (!session) {
      return null;
    }

    //store the session key in redux store
    dispatch(userSlice.actions.setSessionToken(session));

    const isSessionExpired = () => {
      const { exp } = jwtDecode(session);
      const tokenTime = exp * 1000;
      const currentTime = new Date().getTime();

      console.log("Decoded: " + tokenTime);
      console.log("Current: " + currentTime);
      if (currentTime >= tokenTime) {
        dispatch(userSlice.actions.setSessionExpired(true));
        dispatch(userSlice.actions.logOut());
      }
    };

    //every second we check if token is expired
    const time = 1000;
    const interval = setInterval(isSessionExpired, time);

    return () => {
      clearInterval(interval);
    };
  };

  const sessionExpiredMessage = () => {
    if (!sessionExpired) {
      return null;
    }

    toast.info("Session has expired. Please login again", {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });

    //after message has shown we want to reset the sessionExpired
    dispatch(userSlice.actions.setSessionExpired(false));
  };

  return {
    manageSession,
    sessionExpiredMessage,
  };
};
