import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import LoadingLarge from "../components/loading/LoadingLarge";
import { fetchUserDataThunk } from "../features/slices/userSlice/userSlice";
import { useSessionManagement } from "../hooks/useSessionManagement";

export const UserAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { sessionToken, isLoading } = useSelector((state) => state.userSlice);

  //manage session and log users out on token expiration
  useSessionManagement();

  //Memoise the fetchUserDataThunk to prevent unnecessary re-render
  const fetchUser = useCallback(() => {
    dispatch(fetchUserDataThunk());
  }, [dispatch]);

  //fetch the userData
  useEffect(() => {
    if (sessionToken) {
      fetchUser();
    }
  }, [fetchUser, sessionToken]);

  if (!sessionToken) {
    return <Navigate to={"/login"} replace />;
  }

  if (isLoading) {
    return <LoadingLarge textWhileLoading={"Loading account"} />;
  }

  return <>{children}</>;
};
