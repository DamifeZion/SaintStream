import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

const usePasswordResetEmailTimer = () => {
  const { getStorage, removeStorage } = useLocalStorage();
  const emailToReset = import.meta.env.VITE_FORGOT_PASSWORD;

  useEffect(() => {
    const interval = setInterval(() => {
      const reset = getStorage(emailToReset);

      if (!reset) {
        return null;
      }

      const currentTime = new Date().getTime();

      if (currentTime >= reset.expiresIn) {
        removeStorage(emailToReset);
        clearInterval(interval);
      }

      console.log(currentTime);
      console.log(reset.expiresIn)
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [getStorage, removeStorage]);

  return null;
};

export default usePasswordResetEmailTimer;
