import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/forgotPassword/colorBorderIfValue";
import { forgotPasswordSlice } from "../features/slices/forgotPasswordSlice/forgotPasswordSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocalStorage } from "./useLocalStorage";
import { passwordResetSlice } from "../features/slices/passwordResetSlice/passwordResetSlice";
import { useForgotPasswordMutation } from "../features/api/userApi";

export const useForgotPassword = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setStorage } = useLocalStorage();
  const body = useSelector((state) => state.forgotPasswordSlice);
  const [userForgotPassword, { isLoading }] = useForgotPasswordMutation();
  dispatch(forgotPasswordSlice.actions.setIsLoading(isLoading));

  const handleEmailChange = (e) => {
    dispatch(forgotPasswordSlice.actions.setEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await userForgotPassword(body)?.unwrap();
      setStorage(import.meta.env.VITE_FORGOT_PASSWORD, res?.data);
      navigate("/find_account");
      dispatch(passwordResetSlice.actions.reset());
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return {
    handleEmailChange,
    handleSubmit,
  };
};
