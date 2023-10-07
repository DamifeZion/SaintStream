import React from "react";
import { ToastContainer } from "react-toastify";

const ToastPC = () => {
  return (
    <div>
      <ToastContainer
        theme="dark"
        limit={3}
        newestOnTop={false}
        autoClose={4000}
      />
    </div>
  );
};

export default ToastPC;
