import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userSlice } from "../features/slices/userSlice/userSlice";
import { useSessionManagement } from "../hooks/useSessionManagement";
import { useGetUserQuery } from "../features/api/userApi";
import { toast } from "react-toastify";
import LoadingSmall from "../components/loading/LoadingSmall";

export const UserAuth = ({ children }) => {
  //below handles the session token
  useSessionManagement();
  
  const dispatch = useDispatch();

  const { sessionToken } = useSelector((state) => state.userSlice);
  const {
    data: userData,
    isLoading,
    isSuccess,
    error,
  } = useGetUserQuery(sessionToken);

  if (!sessionToken) {
    return <Navigate to={"/login"} />;
  }

  if (sessionToken && isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <LoadingSmall />
      </div>
    );
  }

  if (isSuccess) {
    dispatch(userSlice.actions.setUser(userData.user));
  }

  return children;
};
