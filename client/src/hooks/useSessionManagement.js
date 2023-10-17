import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSlice } from "../features/slices/userSlice/userSlice";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useSessionStorage } from "./useSessionStorage";

export const useSessionManagement = () => {
  const dispatch = useDispatch();
  const { getSession } = useSessionStorage();

  useEffect(() => {
    const session = getSession(import.meta.env.VITE_SESSION_KEY);

    if (!session) return;

    // Store the session key in the Redux store
    dispatch(userSlice.actions.setSessionToken(session));

    //Prevent multiple toast messages due to interval
    let hasToasted = false;

    //check if session has expired, then log user out
    const checkSession = () => {
      const { exp } = jwtDecode(session);
      const tokenTime = exp * 1000;
      const currentTime = new Date().getTime();

      //Show message & log user out on token expiration
      if (currentTime >= tokenTime && !hasToasted) {
        toast.warning("Session expired", {
          position: "top-center",
          pauseOnHover: false,
          closeOnClick: false,
          autoClose: 3000,
        });

        dispatch(userSlice.actions.logOut());

        hasToasted = true;
      }
    };

    const interval = setInterval(checkSession, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return null;
};
