import React from "react";
import loadingSpinner from "../../assets/loading.png";

const LoadingSmall = ({ className }) => {
  return (
    <div className={`${className} mx-auto`}>
      <img src={loadingSpinner} alt="" className="w-full h-full" />
    </div>
  );
};

export default LoadingSmall;
