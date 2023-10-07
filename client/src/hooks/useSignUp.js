import { useDispatch } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/signUp/colorBorderIfValue";
import { signUpSlice } from "../features/slices/signUpSlice/signUpSlice";

export const useSignUp = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    dispatch(signUpSlice.actions.setUserName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(signUpSlice.actions.setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(signUpSlice.actions.setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(signUpSlice.actions.setConfirmPassword(e.target.value));
  };

  const handlePolicyChange = (e) => {
    dispatch(signUpSlice.actions.setPolicy());
  };

  // Below toggels password visibility
  const handlePasswordToggle = () => {
    dispatch(signUpSlice.actions.setHidePassword());
  };

  const handleConfirmPasswordToggle = () => {
    dispatch(signUpSlice.actions.setHideConfirmPassword());
  };

  //Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePolicyChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    handleSubmit,
  };
};
