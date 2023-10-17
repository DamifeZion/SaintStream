import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useSessionManagement } from "../hooks/useSessionManagement";
import LoadingLarge from "../components/loading/LoadingLarge";
import { useGetUserQuery } from "../features/api/userApi";
import { userSlice } from "../features/slices/userSlice/userSlice";

export const UserAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { sessionToken } = useSelector((state) => state.userSlice);
  const { data: user, isLoading } = useGetUserQuery(sessionToken);

  //update the userData in the store
  if (user) {
    dispatch(userSlice.actions.setUser(user.user));
  }

  useSessionManagement();

  if (isLoading) return <LoadingLarge navbarStyle={{ display: "hidden" }} />;

  if (!sessionToken) return <Navigate to="/login" replace />;

  return <>{children}</>;
};
