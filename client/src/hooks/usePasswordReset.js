import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/passwordReset/colorBorderIfValue";
import { passwordResetSlice } from "../features/slices/passwordResetSlice/passwordResetSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const usePasswordReset = (resetToken) => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const { removeStorage } = useLocalStorage();
  const body = useSelector((state) => state.passwordResetSlice);

  const handlePasswordChange = (e) => {
    dispatch(passwordResetSlice.actions.setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(passwordResetSlice.actions.setConfirmPassword(e.target.value));
  };

  const handlePasswordToggle = () => {
    dispatch(passwordResetSlice.actions.setHidePassword());
  };

  const handleConfirmPasswordToggle = () => {
    dispatch(passwordResetSlice.actions.setHideConfirmPassword());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${
      import.meta.env.VITE_SERVER
    }/user/reset-password/${resetToken}`;
    dispatch(passwordResetSlice.actions.setIsLoading(true));

    try {
      const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        dispatch(passwordResetSlice.actions.setIsLoading(false));
        return toast.error(json.message, {
          autoClose: 3000,
          closeOnClick: false,
          draggable: false,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      }

      dispatch(passwordResetSlice.actions.setIsLoading(false));
      toast.success(json.message, {
        autoClose: 3000,
        closeOnClick: false,
        draggable: false,
        pauseOnFocusLoss: false,
      });

      setTimeout(() => {
        //remove user data from local storage upon successful password change. Removal automatically redirects to login
        removeStorage(import.meta.env.VITE_FORGOT_PASSWORD);
        dispatch(passwordResetSlice.actions.reset());
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    handleSubmit,
  };
};
