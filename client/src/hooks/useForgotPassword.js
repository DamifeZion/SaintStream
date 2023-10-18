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
  const [userForgotPassword] = useForgotPasswordMutation();

  const handleEmailChange = (e) => {
    dispatch(forgotPasswordSlice.actions.setEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(forgotPasswordSlice.actions.setIsLoading(true));

    try {
      const res = await userForgotPassword(body)?.unwrap();
      dispatch(forgotPasswordSlice.actions.setIsLoading(false));
      setStorage(import.meta.env.VITE_FORGOT_PASSWORD, res?.data);
      navigate("/find_account");
      dispatch(passwordResetSlice.actions.reset());
    } catch (error) {
      dispatch(forgotPasswordSlice.actions.setIsLoading(false));
      toast.error(error?.data?.message);
    }
  };

  return {
    handleEmailChange,
    handleSubmit,
  };
};
