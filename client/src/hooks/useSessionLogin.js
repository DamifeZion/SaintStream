import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  fetchUserThunk,
  userSlice,
} from "../features/slices/userSlice/userSlice";
import { authUtil } from "../utils/authUtil";
import jwtDecode from "jwt-decode";

export const useSessionLogin = () => {
  const dispatch = useDispatch();
  const { getSessionTokenFromLocalStorage, removeTokenFromLocalStorage } =
    authUtil();

  const sessionKey = getSessionTokenFromLocalStorage();

  const useLogin = useCallback(() => {
    if (!sessionKey) {
      return;
    }

    //dispatch the token to the userSlice
    dispatch(userSlice.actions.setSessionToken(sessionKey));
    //fetch the user with the token stored in the slice
    dispatch(fetchUserThunk());
    console.log("User Logged in");

    const isSessionExpired = () => {
      const { exp } = jwtDecode(sessionKey);
      const currentTime = new Date().getTime();

      //remove token and userData if session expires
      if (currentTime >= exp * 1000) {
        removeTokenFromLocalStorage("SessionKey");
        dispatch(userSlice.actions.setLogOut());
      }
    };

    setInterval(isSessionExpired, 1000);
  }, [dispatch, sessionKey]);

  return {
    useLogin,
  };
};
