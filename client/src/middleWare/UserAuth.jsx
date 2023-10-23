import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userSlice } from "../features/slices/userSlice/userSlice";
import { useSessionManagement } from "../hooks/useSessionManagement";
import { useGetUserQuery } from "../features/api/userApi";
import { toast } from "react-toastify";
import LoadingSmall from "../components/loading/LoadingSmall";
import NetworkError from "../components/networkError/NetworkError";

export const UserAuth = ({ children }) => {
  //below handles the session token
  useSessionManagement();
  const dispatch = useDispatch();
  const { sessionToken } = useSelector((state) => state.userSlice);

  const {
    data: userData,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetUserQuery(sessionToken);

  if (!sessionToken) {
    return <Navigate to={"/login"} />;
  }

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <LoadingSmall className={"w-[35px]"} />
      </div>
    );
  }

  if (isSuccess && userData) {
    dispatch(userSlice.actions.setUser(userData?.user));
  }

  if (isError) {
    return <NetworkError onRetryClick={refetch} />;
  }

  return children;
};
