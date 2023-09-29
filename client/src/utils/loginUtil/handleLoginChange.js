import { useSelector, useDispatch } from "react-redux";
import { loginSlice } from "../../features/slices/loginSlice/loginSlice";

import { colorBorderIfValue } from "./colorBorderIfValue";

export const handleLoginChange = () => {
  const dispatch = useDispatch();
  const { email, password, hidePassword } = useSelector(
    (state) => state.loginSlice
  );

  //the below function colors border if value in the input field and button color if successful
  colorBorderIfValue();

  const handleEmailChange = (event) => {
    dispatch(loginSlice.actions.setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(loginSlice.actions.setPassword(event.target.value));
  };

  const handlePasswordToggle = () => {
    dispatch(loginSlice.actions.setPasswordVisible());
  };

  return { handleEmailChange, handlePasswordChange, handlePasswordToggle };
};
