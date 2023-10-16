import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/login/colorBorderIfValue";
import { loginSlice } from "../features/slices/loginSlice/loginSlice";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./useSessionStorage";

export const useLogin = () => {
  colorBorderIfValue();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.loginSlice);
  const { setSession } = useSessionStorage();

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
    const url = `${import.meta.env.VITE_SERVER}/user/login`;
    dispatch(loginSlice.actions.setIsLoading(true));

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        dispatch(loginSlice.actions.setIsLoading(false));
        return toast.error(json.message);
      }

      dispatch(loginSlice.actions.setIsLoading(false));
      //store token in localStorage
      setSession(import.meta.env.VITE_SESSION_KEY, json.token);
      navigate("/movie_library", { replace: true });
      dispatch(loginSlice.actions.reset());
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handlePasswordToggle,
    handleSubmit,
  };
};
