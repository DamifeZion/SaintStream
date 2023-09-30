import { useDispatch, useSelector } from "react-redux";
import { authUtil } from "../utils/authUtil";
import { toast } from "react-toastify";
import { loginSlice } from "../features/slices/loginSlice/loginSlice";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../features/slices/userSlice/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = useSelector((state) => state.loginSlice);
  const { user } = useSelector((state) => state.userSlice);
  const { saveTokenToLocalStorage } = authUtil();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_SERVER}/user/login`;
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();
      console.log(json);

      if (!res.ok) {
        return toast.error(json.message);
      }

      saveTokenToLocalStorage("SessionKey", json.token);
      dispatch(loginSlice.actions.reset());
      toast.success(json.message);

      //once there is user in the local storage  we navigate to the movie library page

      setTimeout(() => {
        navigate("/movie_library");
      }, 2500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { handleSubmit };
};
