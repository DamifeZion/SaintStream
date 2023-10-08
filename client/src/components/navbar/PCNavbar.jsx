import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../features/slices/userSlice/userSlice";

const browserLocation = window.location.pathname;
const activeStyle = `text-[--green] font-extrabold`;

const PCNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);

  const handleLogout = () => {
    dispatch(userSlice.actions.logOut());
  };

  return (
    <div className=" flex w-full text-md">
      {user && (
        <ul className="flex items-center gap-4 text-[--lighter-gray]">
          <NavLink
            className={`${browserLocation === "/" && activeStyle}`}
            to={!user ? "/" : '/movie_library'}
          >
            Home
          </NavLink>

          <NavLink
            className={`${browserLocation === "/discover" && activeStyle}`}
            to={"/discover"}
          >
            Discover
          </NavLink>

          <NavLink
            className={`${browserLocation === "/movie_release" && activeStyle}`}
            to={"/movie_release"}
          >
            Movie Release
          </NavLink>

          <NavLink
            className={`${browserLocation === "/forum" && activeStyle}`}
            to={"/forum"}
          >
            Forum
          </NavLink>

          <NavLink
            className={`${browserLocation === "/about" && activeStyle}`}
            to={"/about"}
          >
            About
          </NavLink>
        </ul>
      )}

      <div className="flex items-center font-medium ml-auto">
        {user && (
          <button className="p-2 text-lg bg-[--light-gray] rounded-full">
            <BiSearch />
          </button>
        )}

        {/* Below is temporarily disabled based for design enhancement*/}

        {/* <button className="ml-2 py-[5px] px-4 border border-[--light-gray] hover:bg-[--green-dark] hover:border-[--green-dark] transition-bg ease duration-150 rounded-sm">
          Sign in
        </button> */}

        <NavLink
          onClick={handleLogout}
          to={`${user ? "" : "/login"}`}
          className={`ml-4 py-[6px] px-4 rounded-md transition-bg ease duration-150 font-semibold ${
            user
              ? "bg-[--danger] hover:bg-[--danger-dark]"
              : "bg-[--green] hover:bg-[--green-dark]"
          }`}
        >
          {user ? "Sign out" : "Sign in"}
        </NavLink>
      </div>
    </div>
  );
};

export default PCNavbar;
