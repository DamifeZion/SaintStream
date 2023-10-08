import { useDispatch } from "react-redux";
import { userSlice } from "../features/slices/userSlice/userSlice";
import jwtDecode from "jwt-decode";
import { useLocalStorage } from "./useLocalStorage";
import { toast } from "react-toastify";

export const useSessionManagement = () => {
  const dispatch = useDispatch();
  const { getToken } = useLocalStorage();

  const manageSession = () => {
    const session = getToken(import.meta.env.VITE_SESSION_KEY);

    if (!session) {
      return null;
    }

    //store the session key in redux store
    dispatch(userSlice.actions.setSessionToken(session));

    const decodedToken = jwtDecode(session);
    const currentTime = new Date().getTime();

    const isSessionExpired = () => {
      if (decodedToken.exp * 1000 <= currentTime) {
        toast.info("Session expired. Redirecting t Login...");
        setTimeout(() => {
          return dispatch(userSlice.actions.logOut());
        }, 3000);
      }
    };

    isSessionExpired();
    //every 10 seconds we check if token is expired
    const time = 10000;
    const interval = setInterval(isSessionExpired, time);

    return () => {
      clearInterval(interval);
    };
  };

  return {
    manageSession,
  };
};
