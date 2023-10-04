import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forgotPasswordSlice } from "../features/slices/forgotPasswordSlice/forgotPasswordSlice";

export const useForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.forgotPasswordSlice);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_SERVER}/user/forgot-password`;
    dispatch(forgotPasswordSlice.actions.setIsLoading(true));

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        dispatch(forgotPasswordSlice.actions.setIsLoading(false));
        return toast.error(json.message);
      }

      dispatch(forgotPasswordSlice.actions.reset());
      toast.success(json.message);
      setTimeout(() => {
        navigate("/find_account");
      }, 2500);
    } catch (error) {
      console.log(error.message)
      toast.error(error.message);
      dispatch(forgotPasswordSlice.actions.setIsLoading(false));
    }
  };
  return {
    handleSubmit,
  };
};
