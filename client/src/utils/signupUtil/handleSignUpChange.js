import { useDispatch } from "react-redux";
import { signUpSlice } from "../../features/slices/signUpSlice/signUpSlice";

import { colorBorderIfValue } from "./colorBorderIfValue";

export const handleSignUpChange = () => {
  const dispatch = useDispatch();

  //the below function colors border if value in the input field and button color if successful
  colorBorderIfValue();

  const handleUsernameChange = (event) => {
    dispatch(signUpSlice.actions.setUserName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(signUpSlice.actions.setEmail(event.target.value.toLowerCase()));
  };

  const handlePasswordChange = (event) => {
    dispatch(signUpSlice.actions.setPassword(event.target.value));
  };

  const handleConfirmPasswordChange = (event) => {
    dispatch(signUpSlice.actions.setConfirmPassword(event.target.value));
  };

  const handlePolicyChange = () => {
    dispatch(signUpSlice.actions.setPolicy());
  };

  const handlePasswordToggle = () => {
    dispatch(signUpSlice.actions.setHidePassword());
  };

  const handleConfirmPasswordToggle = () => {
    dispatch(signUpSlice.actions.setHideConfirmPassword());
  };

  return {
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePolicyChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
  };
};
