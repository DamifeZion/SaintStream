import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingLarge from "../components/loading/LoadingLarge";
import { fetchUserDataThunk } from "../features/slices/userSlice/userSlice";
import { useSessionManagement } from "../hooks/useSessionManagement";

export const UserAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { sessionToken, isLoading } = useSelector((state) => state.userSlice);

  useEffect(() => {
    const { manageSession } = useSessionManagement();
    manageSession();
  }, []);

  useEffect(() => {
    if (sessionToken) {
      dispatch(fetchUserDataThunk());
    }
  }, [dispatch, sessionToken]);

  if (!sessionToken) {
    return <Navigate to={"/login"} replace />;
  }

  if (isLoading) {
    return <LoadingLarge />;
  }

  return <>{children}</>;
};
