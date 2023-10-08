import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/signUp/colorBorderIfValue";
import { signUpSlice } from "../features/slices/signUpSlice/signUpSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  colorBorderIfValue();
  const navigate = useNavigate();
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

  // Below toggles password visibility
  const handlePasswordToggle = () => {
    dispatch(signUpSlice.actions.setHidePassword());
  };

  const handleConfirmPasswordToggle = () => {
    dispatch(signUpSlice.actions.setHideConfirmPassword());
  };

  //Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_SERVER}/user/register`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        return toast.error(json.message);
      }

      toast.success(json.message);

      setTimeout(() => {
        navigate("/login");
      }, 3500);

      dispatch(signUpSlice.actions.reset());
    } catch (error) {
      toast.error(error.message);
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
