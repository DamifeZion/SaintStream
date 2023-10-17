import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/login/colorBorderIfValue";
import { loginSlice } from "../features/slices/loginSlice/loginSlice";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./useSessionStorage";
import { useLoginMutation } from "../features/api/userApi";

export const useLogin = () => {
  colorBorderIfValue();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.loginSlice);
  const { setSession } = useSessionStorage();
  const [loginUser, { isLoading }] = useLoginMutation();
  //update the store for conditional rendering else where
  dispatch(loginSlice.actions.setIsLoading(isLoading));

  const handleEmailChange = (e) => {
    dispatch(loginSlice.actions.setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(loginSlice.actions.setPassword(e.target.value));
  };

  const handlePasswordToggle = () => {
    dispatch(loginSlice.actions.setPasswordVisible());
  };

  //Submits data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(body).unwrap();
      toast.success(res?.message);
      navigate("/movie_library");
      setSession(import.meta.env.VITE_SESSION_KEY, res?.token);
      dispatch(loginSlice.actions.reset());
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handlePasswordToggle,
    handleSubmit,
  };
};
