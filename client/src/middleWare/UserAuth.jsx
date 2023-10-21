import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useSessionManagement } from "../hooks/useSessionManagement";
import LoadingLarge from "../components/loading/LoadingLarge";
import { useGetUserQuery } from "../features/api/userApi";
import { userSlice } from "../features/slices/userSlice/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/navbar/Navbar";

export const UserAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sessionToken } = useSelector((state) => state.userSlice);
  const { data: user, isLoading, isError } = useGetUserQuery(sessionToken);

  useEffect(() => {
    if (!sessionToken) navigate("/login");
  }, [sessionToken, isLoading]);

  if (sessionToken && !user) {
    return (
      <div>
        <Navbar logoCn={'w-[20px]'}/>
        {toast.error("No internet connection")}
      </div>
    );
  }

  //update the userData in the store
  if (user) {
    dispatch(userSlice.actions.setUser(user.user));
  }

  useSessionManagement();

  if (isLoading) return <LoadingLarge navbarStyle={{ display: "hidden" }} />;

  return <>{children}</>;
};
