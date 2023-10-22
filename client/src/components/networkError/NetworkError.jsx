import React from "react";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";

const NetworkError = ({ onRetryClick }) => {
  return (
    <div className="w-full h-screen bg-[--black] flex justify-center items-center px-[--px]">
      <div className="max-w-md flex flex-col items-center justify-center mx-auto text-center">
        <h1 className="flex items-center flex-col gap-2 text-2xl font-bold text-[--dark-gray] mt-8">
          <MdSignalWifiConnectedNoInternet0 className="text-5xl " />
          <p>Network Error</p>
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Uh oh, it looks like you don't have an internet connection. Please
          check your network settings and try again.
        </p>

        <button
          onClick={onRetryClick}
          className="bg-[--green] text-white font-bold py-1 px-4 rounded-md mt-8"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default NetworkError;
