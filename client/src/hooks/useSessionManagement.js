import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSlice } from "../features/slices/userSlice/userSlice";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useSessionStorage } from "./useSessionStorage";

export const useSessionManagement = () => {
  const dispatch = useDispatch();
  const { getSession } = useSessionStorage();

  const manageSession = () => {
    const session = getSession(import.meta.env.VITE_SESSION_KEY);

    if (!session) {
      return null;
    }

    // Store the session key in the Redux store
    dispatch(userSlice.actions.setSessionToken(session));

    //check if session has expired, then log user out
    const isSessionExpired = () => {
      const { exp } = jwtDecode(session);
      const tokenTime = exp * 1000;
      const currentTime = new Date().getTime();

      //uncomment the below and fix the bug of showing the toast 3 times before redirecting to login
      // console.log("Decoded: " + tokenTime);
      // console.log("Current: " + currentTime);

      //Show message & log user out on token expiration
      if (currentTime >= tokenTime) {
        toast.info("Session has expired, please login again", {
          position: "top-center",
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          closeOnClick: false,
          autoClose: 3000,
        });

        setTimeout(() => {
          dispatch(userSlice.actions.logOut());
        }, 3000);
      }
    };

    // Every 2 seconds, we check if the token is expired
    const time = 2000;
    const interval = setInterval(isSessionExpired, time);

    return () => {
      clearInterval(interval);
    };
  };

  return {
    manageSession,
  };
};
