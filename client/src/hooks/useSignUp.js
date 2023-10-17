import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/signUp/colorBorderIfValue";
import { signUpSlice } from "../features/slices/signUpSlice/signUpSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../features/api/userApi";

export const useSignUp = () => {
  colorBorderIfValue();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.signUpSlice);
  const [signUpUser] = useSignUpMutation();

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
      const response = await signUpUser(body);
      if (signUpUser.error) {
        console.log(signUpUser.error); // Log the error object
        toast.error(signUpUser.error.message); // Display the error message
      } else {
        const json = response.data;
        console.log(json);
        toast.success(json?.message); // Use optional chaining to access the message property
      }
    } catch (error) {
      console.log(error); // Log any unexpected errors
      toast.error("An error occurred while signing up."); // Display a generic error message
    }

    // try {
    //   const res = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: { "Content-Type": "application/json" },
    //   });

    //   const json = await res.json();

    //   if (!res.ok) {
    //     dispatch(signUpSlice.actions.setIsLoading(false));
    //     return toast.error(json.message);
    //   }

    //   dispatch(signUpSlice.actions.setIsLoading(false));

    //   toast.success(json.message);

    //   navigate("/login");

    //   dispatch(signUpSlice.actions.reset());
    // } catch (error) {
    //   toast.error(error.message);
    // }
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
