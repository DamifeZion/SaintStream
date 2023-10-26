import { useMediaQuery } from "@mui/material";
import React from "react";
import ToastMobile from "./ToastMobile";
import ToastPC from "./ToastPC";

const ToastWrapper = ({ className, autoClose, pauseOnHover }) => {
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");
  return (
    <div className={className}>
      {isSmallScreen ? (
        <ToastMobile autoClose={autoClose} pauseOnHover={pauseOnHover} />
      ) : (
        <ToastPC autoClose={autoClose} pauseOnHover={pauseOnHover} />
      )}
    </div>
  );
};

export default ToastWrapper;
