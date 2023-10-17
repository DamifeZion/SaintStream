import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/passwordReset/colorBorderIfValue";
import { passwordResetSlice } from "../features/slices/passwordResetSlice/passwordResetSlice";
import { toast } from "react-toastify";
import { useLocalStorage } from "./useLocalStorage";
import { useForgotPasswordMutation } from "../features/api/userApi";
import { forgotPasswordSlice } from "../features/slices/forgotPasswordSlice/forgotPasswordSlice";

export const usePasswordReset = (resetToken) => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const { removeStorage } = useLocalStorage();
  const body = useSelector((state) => state.passwordResetSlice);
  const [resetUserPassword, { isLoading }] = useForgotPasswordMutation();
  //update the store for conditional rendering else where
  dispatch(forgotPasswordSlice.actions.setIsLoading(isLoading));

  const handlePasswordChange = (e) => {
    dispatch(passwordResetSlice.actions.setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(passwordResetSlice.actions.setConfirmPassword(e.target.value));
  };

  const handlePasswordToggle = () => {
    dispatch(passwordResetSlice.actions.setHidePassword());
  };

  const handleConfirmPasswordToggle = () => {
    dispatch(passwordResetSlice.actions.setHideConfirmPassword());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await resetUserPassword(resetToken, body)?.unwrap();
      console.log('res ', res)
      toast.success(res?.message);
      removeStorage(import.meta.env.VITE_FORGOT_PASSWORD);
      dispatch(passwordResetSlice.actions.reset());
    } catch (error) {
      console.log('error', error)
      toast.error(error?.data?.message);
    }
  };

  return {
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    handleSubmit,
  };
};
