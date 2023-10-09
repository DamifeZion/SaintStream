import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/forgotPassword/colorBorderIfValue";
import { forgotPasswordSlice } from "../features/slices/forgotPasswordSlice/forgotPasswordSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocalStorage } from "./useLocalStorage";
import { passwordResetSlice } from "../features/slices/passwordResetSlice/passwordResetSlice";

export const useForgotPassword = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setStorage } = useLocalStorage();
  const body = useSelector((state) => state.forgotPasswordSlice);

  const handleEmailChange = (e) => {
    dispatch(forgotPasswordSlice.actions.setEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_SERVER}/user/forgot-password`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        return toast.error(json.message);
      }

      setStorage(import.meta.env.VITE_FORGOT_PASSWORD, json.data);
      navigate("/find_account");
      dispatch(passwordResetSlice.actions.reset());
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    handleEmailChange,
    handleSubmit,
  };
};
