import { useSelector, useDispatch } from "react-redux";
import { userSlice } from "../features/slices/userSlice/userSlice";
import { toast } from "react-toastify";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const { userName, email, password, confirmPassword, policy } = useSelector(
    (state) => state.signUpSlice
  );

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
        dispatch(userSlice.actions.setMessage(json.message));
        toast.error(json.message);
        return;
      }
      
      dispatch(userSlice.actions.setUser(json.token));
      dispatch(userSlice.actions.setMessage(json.message));
      toast.success(json.message);
    } catch (error) {
      dispatch(userSlice.actions.setMessage(error.message));
      toast.error(error.message);
    }
  };

  return { handleSubmit };
};