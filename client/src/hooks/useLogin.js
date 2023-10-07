import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/login/colorBorderIfValue";
import { loginSlice } from "../features/slices/loginSlice/loginSlice";

export const useLogin = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();

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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handlePasswordToggle,
    handleSubmit,
  };
};
