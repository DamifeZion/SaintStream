import { useSelector, useDispatch } from "react-redux";
import { userSlice } from "../features/slices/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUpSlice } from "../features/slices/signUpSlice/signUpSlice";
import { authUtil } from "../utils/authUtil";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, email, password, confirmPassword, policy } = useSelector(
    (state) => state.signUpSlice
  );
  const { saveTokenToLocalStorage } = authUtil();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_SERVER}/user/register`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          userName,
          email,
          password,
          confirmPassword,
          policy,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        return toast.error(json.message);
      }

      //store user token to retrieve when user redirected to auth pages
      saveTokenToLocalStorage("SessionKey", json.token);
      dispatch(signUpSlice.actions.reset());
      toast.success(json.message);

      setTimeout(() => {
        navigate("/login");
      }, 3500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { handleSubmit };
};
