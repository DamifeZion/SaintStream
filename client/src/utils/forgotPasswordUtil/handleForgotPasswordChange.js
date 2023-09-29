import { useDispatch } from "react-redux";
import { forgotPasswordSlice } from "../../features/slices/forgotPasswordSlice/forgotPasswordSlice";

export const handleForgotPasswordChange = () => {
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(forgotPasswordSlice.actions.setEmail(e.target.value));
  };

  return { handleEmailChange };
};
