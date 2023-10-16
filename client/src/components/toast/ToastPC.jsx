import React from "react";
import { ToastContainer } from "react-toastify";

const ToastPC = ({ autoClose, pauseOnHover }) => {
  return (
    <div>
      <ToastContainer
        theme="dark"
        limit={3}
        newestOnTop={false}
        autoClose={autoClose}
        pauseOnHover={pauseOnHover}
      />
    </div>
  );
};

export default ToastPC;
