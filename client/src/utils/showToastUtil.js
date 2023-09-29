import { toast } from "react-toastify";

export const showToastUtil = () => {
  const showToastMessage = (notificationType, message, position) => {
    toast[notificationType](message, {
      position: position,
    });
  };

  return { showToastMessage };
};
