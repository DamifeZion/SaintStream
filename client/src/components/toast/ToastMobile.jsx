import React from "react";
import { ToastContainer } from "react-toastify";

const ToastMobile = () => {
  return (
    <div>
      <ToastContainer
        limit={2}
        theme="dark"
        newestOnTop={false}
        autoClose={3500}
      />
    </div>
  );
};

export default ToastMobile;
