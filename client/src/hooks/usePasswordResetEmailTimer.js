import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import moment from "moment";

const usePasswordResetEmailTimer = () => {
  const { getStorage, removeStorage } = useLocalStorage();
  const emailToReset = import.meta.env.VITE_FORGOT_PASSWORD;

  useEffect(() => {
    const interval = setInterval(() => {
      const reset = getStorage(emailToReset);

      if (!reset) {
        return null;
      }

      const currentTime = moment();
      const expirationTime = reset.expiresIn;
      const isExpired = currentTime.isAfter(expirationTime);

      if (isExpired) {
        removeStorage(emailToReset);
        clearInterval(interval);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [getStorage, removeStorage]);

  return null;
};

export default usePasswordResetEmailTimer;
