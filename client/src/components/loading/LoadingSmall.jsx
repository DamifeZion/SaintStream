import React from "react";
import loadingSpinner from "../../assets/loading.png";

const LoadingSmall = ({ className }) => {
  return (
    <div className={`${className} mx-auto w-[20px]`}>
      <img src={loadingSpinner} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default LoadingSmall;
