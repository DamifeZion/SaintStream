import React from "react";
import { ToastContainer } from "react-toastify";

const ToastMobile = ({ autoClose, pauseOnHover }) => {
  return (
    <div>
      <ToastContainer
        limit={2}
        theme="dark"
        newestOnTop={false}
        autoClose={autoClose}
        pauseOnHover={pauseOnHover}
      />
    </div>
  );
};

export default ToastMobile;
