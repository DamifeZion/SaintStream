import { useDispatch, useSelector } from "react-redux";
import { colorBorderIfValue } from "../utils/colorBorder/passwordReset/colorBorderIfValue";
import { passwordResetSlice } from "../features/slices/passwordResetSlice/passwordResetSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const usePasswordReset = () => {
  colorBorderIfValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    try {
      const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        return toast.error(json.message);
      }

      toast.success(json.message, {
        autoClose: 3000,
        closeOnClick: false,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
      dispatch(passwordResetSlice.actions.reset());
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
