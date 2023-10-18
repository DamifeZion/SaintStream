import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/passwordReset/colorBorderIfValue";
import { passwordResetSlice } from "../features/slices/passwordResetSlice/passwordResetSlice";
import { toast } from "react-toastify";
import { useLocalStorage } from "./useLocalStorage";
import { useForgotPasswordMutation } from "../features/api/userApi";

export const usePasswordReset = (resetToken) => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const { removeStorage } = useLocalStorage();
  const body = useSelector((state) => state.passwordResetSlice);
  const [resetUserPassword] = useForgotPasswordMutation();

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
    dispatch(passwordResetSlice.actions.setIsLoading(true));

    try {
      const res = await resetUserPassword(resetToken, body)?.unwrap();
      console.log("res ", res);
      dispatch(passwordResetSlice.actions.setIsLoading(false));
      toast.success(res?.message);
      removeStorage(import.meta.env.VITE_FORGOT_PASSWORD);
      dispatch(passwordResetSlice.actions.reset());
    } catch (error) {
      dispatch(passwordResetSlice.actions.setIsLoading(false));
      console.log("error", error);
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
