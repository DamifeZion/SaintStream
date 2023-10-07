import { useMediaQuery } from "@mui/material";
import React from "react";
import ToastMobile from "./ToastMobile";
import ToastPC from "./ToastPC";

const ToastWrapper = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");
  return <>{isSmallScreen ? <ToastMobile /> : <ToastPC />}</>;
};

export default ToastWrapper;
