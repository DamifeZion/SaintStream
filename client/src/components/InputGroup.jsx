import React from "react";
import { FiChevronRight } from "react-icons/fi";

const InputGroup = ({ contCn, cont2Cn, inputCn, btnCn }) => {
  return (
    <div
      className={`${contCn} overflow-hidden p-1 rounded-[2.5px] font-rubik w-full`}
    >
      <div
        className={`${cont2Cn} flex flex-col items-center gap-3 shadow-sm 500:gap-4 600:flex-row 600:gap-2`}
      >
        <input
          type="text"
          placeholder="Email address"
          name="hs-trailing-button-add-on"
          className={`${inputCn} block w-full outline-none bg-[--dark-gray] shadow-sm border-[.5px] border-[--light-gray] rounded-md text-lg tracking-wide text-[--lighter-gray] focus:z-10 outline-2 focus:outline-[--green] focus:ring-[--green] transition-all ease-linear duration-200 py-3 px-3 600:py-4 700:rounded-sm`}
        />
        <button
          type="button"
          className={`${btnCn} py-2 px-5 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-md bg-[--green] text-white hover:bg-[--green-dark] transition-all text-1xl w-fit 600:py-3 600:text-2xl 700:rounded-sm 900:font-medium 1000:py-[16px] 1000:rounded-[5px] 1200:py-[14.5px]`}
        >
          Get Started
          <FiChevronRight strokeWidth={2.2} className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default InputGroup;
