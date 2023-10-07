import { useDispatch } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/forgotPassword/colorBorderIfValue";
import { forgotPasswordSlice } from "../features/slices/forgotPasswordSlice/forgotPasswordSlice";

export const useForgotPassword = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(forgotPasswordSlice.actions.setEmail(e.target.value));
  };

  const handleSubmit = () => {};

  return {
    handleEmailChange,
    handleSubmit,
  };
};
