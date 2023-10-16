import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

import { fetchUserDataThunk } from "../features/slices/userSlice/userSlice";
import { useSessionManagement } from "../hooks/useSessionManagement";
import LoadingLarge from "../components/loading/LoadingLarge";

export const UserAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { sessionToken, isLoading } = useSelector((state) => state.userSlice);

  useSessionManagement();

  if (isLoading) return <LoadingLarge />;

  const fetchUser = useCallback(() => {
    dispatch(fetchUserDataThunk());
  }, [dispatch]);

  useEffect(() => {
    if (sessionToken) {
      fetchUser();
    }
  }, [fetchUser, sessionToken]);

  if (!sessionToken) return <Navigate to="/login" replace />;

  return <>{children}</>;
};
