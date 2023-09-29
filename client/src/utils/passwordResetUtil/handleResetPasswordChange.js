import { useDispatch } from "react-redux";
import { passwordResetSlice } from "../../features/slices/passwordResetSlice/passwordResetSlice.js";

export const handleResetPasswordChange = () => {
  const dispatch = useDispatch();

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
  return {
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
  };
};
