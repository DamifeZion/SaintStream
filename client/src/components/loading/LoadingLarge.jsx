import React from "react";
import loading from "../../assets/loading.png";
import Navbar from "../navbar/Navbar";

const LoadingLarge = ({ cont1Cn, cont2Cn, imgCn, labelCn, textWhileLoading }) => {
  return (
    <div className={`${cont1Cn} h-screen flex flex-col`}>
      <div>
        <Navbar screensCn="hidden" />
      </div>

      <div
        className={`${cont2Cn} flex-grow flex flex-col gap-4 items-center justify-center select-none`}
      >
        <img
          id="loading"
          src={loading}
          alt="Loading..."
          className={`${imgCn} w-[30px]`}
        />
        <label htmlFor="loading" className={labelCn}>
          { textWhileLoading || 'Loading...'}
        </label>
      </div>
    </div>
  );
};

export default LoadingLarge;
