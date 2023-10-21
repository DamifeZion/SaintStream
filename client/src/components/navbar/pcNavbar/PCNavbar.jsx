import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiCaretDown } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../../features/slices/userSlice/userSlice";
import userImage from "../../../assets/user.svg";
import ProfileDropdown from "./ProfileDropdown";
import { pcNavbarSlice } from "../../../features/slices/pcNavBarSlice/pcNavbarSlice";

const browserLocation = window.location.pathname;
const activeStyle = `text-[--green] font-extrabold`;

const PCNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);
  const { showProfileDropdown } = useSelector((state) => state.pcNavbarSlice);

  const handleLogout = () => {
    dispatch(userSlice.actions.logOut());
  };

  const toggleProfileDropdown = () => {
    dispatch(pcNavbarSlice.actions.toggleProfileDropdown());
  };

  console.log(showProfileDropdown);

  return (
    <div className=" flex w-full text-md">
      {user && (
        <ul className="flex items-center gap-4 text-[--lighter-gray]">
          <NavLink
            className={`${browserLocation === "/" && activeStyle}`}
            to={!user ? "/" : "/movie_library"}
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
          <div className="flex items-center gap-3">
            <button className="p-[2px] text-1xl rounded-full">
              <BiSearch />
            </button>

            <button className="p-[2px] text-1xl rounded-full">
              <IoNotificationsOutline />
            </button>

            <button
              id="profile"
              onClick={toggleProfileDropdown}
              className="relative flex items-center"
            >
              <span
                id="profile-img"
                className="w-[26px] h-[26px] border rounded-full"
              >
                <img
                  src={user?.image ? `${user.image}` : userImage}
                  alt="profile image"
                  className="w-full h-full object-cover"
                />
              </span>

              <span className="ml-1 text-[--action-white] text-lg">
                <PiCaretDown />
              </span>
            </button>

            <div id="dropDown-menu" className={`${showProfileDropdown ? 'visible' : 'hidden'}`}>
              <ProfileDropdown />
            </div>
          </div>
        )}

        {/* <NavLink
          onClick={handleLogout}
          to={`${user ? "" : "/login"}`}
          className={`ml-4 py-[6px] px-4 rounded-md transition-bg ease duration-150 font-semibold ${
            user
              ? "bg-[--danger] hover:bg-[--danger-dark]"
              : "bg-[--green] hover:bg-[--green-dark]"
          }`}
        >
          {user ? "Sign out" : "Sign in"}
        </NavLink> */}
      </div>
    </div>
  );
};

export default PCNavbar;
