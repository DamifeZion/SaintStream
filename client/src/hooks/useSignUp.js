import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/signUp/colorBorderIfValue";
import { signUpSlice } from "../features/slices/signUpSlice/signUpSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../features/api/userApi";
import { loginSlice } from "../features/slices/loginSlice/loginSlice";

export const useSignUp = () => {
  colorBorderIfValue();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.signUpSlice);
  const [signUpUser, { isLoading }] = useSignUpMutation();
  //update the store for conditional rendering else where
  dispatch(signUpSlice.actions.setIsLoading(isLoading));

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

    try {
      const res = await signUpUser(body)?.unwrap();
      toast.success(res?.message);
      navigate("/login");
      dispatch(loginSlice.actions.reset());
    } catch (error) {
      toast.error(error?.data?.message);
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
