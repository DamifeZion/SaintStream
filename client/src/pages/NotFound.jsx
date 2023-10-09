import React from "react";
import logo from "../assets/saintstream-logo.svg";
import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const NotFound = () => {
  useDocumentTitle("Saintstream");
  return (
    <div className="flex flex-col overflow-x-hidden relative border border-red-600 min-h-[460px] 500:h-screen">
      <nav className="bg-[--black] px-[--px] border border-blue-600 w-full z-[1000]">
        <NavLink
          to={"/"}
          className="flex items-center p-4 w-[180px] px-[--px] 400:w-[200px] 800:px-0"
        >
          <img src={logo} alt="" />
        </NavLink>
      </nav>

      <span
        id="overlay"
        className="w-full h-full border border-green-600 absolute top-0 left-0 bg-black bg-opacity-40"
      />

      <div
        id="notFound"
        className="flex flex-col items-center justify-center px-[--px] bg-404NotFound bg-cover h-full text-center font-rubik bg-no-repeat"
      >
        <h1 className="relative z-10 font-medium tracking-wide text-[28px] 400:text-4xl 500:text-[28px] 600:text-4xl 700:text-[42px] 800:text-6xl 900:text-5xl 1000:text-[52px] 1200:text-[62px] 1200:font-semibold">
          Lost your way?
        </h1>

        <h3 className="relative z-10 w-[155px] text-xs 400:text-[14px] 400:w-[210px] 400:font-light 400:mt-3 500:w-[300px] 500:mt-2 700:mt-5 700:text-lg 700:w-[350px] 800:text-2xl 800:w-[430px] 800:leading-tight 900:text-xl 900:w-[500px] 1000:text-1xl 1000:w-[540px] 1000:mt-7 1200:text-[25px] 1200:w-[650px]">
          Sorry we cant find that page. You'll find loads to explore on the home
          page
        </h3>

        <NavLink to={"/"}>
          <button className="relative z-10 bg-[--white] text-[--black] px-2 py-[6px] mt-2 rounded-md font-medium text-[8px] 400:text-sm 400:mt-3 500:text-xs 700:text-[12px] 700:mt-5 800:text-lg 800:p-3 900:text-md 900:py-2 900:px-3 1000:mt-7 1200:text-xl 1200:p-3">
            Saintstream Home
          </button>
        </NavLink>

        <p className="relative z-10 pl-3 py-2 border-l-[2px] border-red-700 font-inter font-extralight text-[--lighter-gray] text-xs 300:mt-40 400:mt-36 500:text-sm 500:mt-32 600:mt-28 700:text-md 800:text-2xl 800:mt-14 900:text-1xl 900:mt-20 1000:text-2xl 1000:mt-[64px] 1200:text-[26px] 1200:mt-10">
          Error Code <b className=" font-semibold">NSES-404</b>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
