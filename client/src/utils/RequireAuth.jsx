import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userSlice);

  if (!user) {
    useEffect(() => {
      navigate(-1, { replace: true });
    }, []);
    return;
  }

  return children;
};
