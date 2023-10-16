import { useMediaQuery } from "@mui/material";
import React from "react";
import ToastMobile from "./ToastMobile";
import ToastPC from "./ToastPC";

const ToastWrapper = ({ autoClose, pauseOnHover }) => {
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");
  return (
    <>
      {isSmallScreen ? (
        <ToastMobile autoClose={autoClose} pauseOnHover={pauseOnHover} />
      ) : (
        <ToastPC autoClose={autoClose} pauseOnHover={pauseOnHover} />
      )}
    </>
  );
};

export default ToastWrapper;
