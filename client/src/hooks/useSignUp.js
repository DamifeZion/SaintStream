import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/signUp/colorBorderIfValue";
import { signUpSlice } from "../features/slices/signUpSlice/signUpSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const useSignUp = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.signUpSlice);

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
      });
      const json = res.data;

      if (!res.ok) {
        return toast.info(json.message);
      }

      toast.success(json.message);
    } catch (error) {
      toast.info(error.message);
    }
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
