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
  const { user, sessionToken } = useSelector((state) => state.userSlice);
  const { showProfileDropdown } = useSelector((state) => state.pcNavbarSlice);

  const handleLogout = () => {
    dispatch(userSlice.actions.logOut());
  };

  const toggleProfileDropdown = () => {
    dispatch(pcNavbarSlice.actions.toggleProfileDropdown());
  };

  return (
    <div className=" flex w-full text-md border">
      {/* user is not signed in */}
      {!sessionToken && (
        <NavLink
          onClick={handleLogout}
          to="/login"
          className={`ml-auto py-[6px] px-4 rounded-md transition-bg ease duration-150 font-semibold bg-[--green] hover:bg-[--green-dark]`}
        >
          Sign in
        </NavLink>
      )}

      {/* user is signed in center links*/}
      {sessionToken && (
        <ul className="flex items-center gap-4 text-[--lighter-gray]">
          <NavLink
            className={`${browserLocation === "/" && activeStyle}`}
            to={!sessionToken ? "/" : "/movie_library"}
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

      {/* User is signed in right stuffs */}
      {sessionToken && (
        <div className="flex items-center font-medium ml-auto">
          <div className="flex items-center gap-3 relative">
            <button className="p-[2px] text-1xl rounded-full hover:text-[--green] transition-all ease-linear duration-150">
              <BiSearch />
            </button>

            <button className="p-[2px] text-1xl rounded-full hover:text-[--green] transition-all ease-linear duration-150">
              <IoNotificationsOutline />
            </button>

            <button
              id="profile"
              onClick={toggleProfileDropdown}
              className="relative flex items-center group"
            >
              <span
                id="profile-img"
                className="w-[26px] h-[26px] border group-hover:border-[--green] transition-all ease-linear duration-150 rounded-full"
              >
                <img
                  src={user?.image ? `${user.image}` : userImage}
                  alt="profile image"
                  className="w-full h-full object-cover"
                />
              </span>

              <span
                className={`ml-1 text-[--action-white] text-lg group-hover:text-[--green] transition-all ease-linear duration-150 ${
                  showProfileDropdown && "rotate-180"
                }`}
              >
                <PiCaretDown />
              </span>
            </button>

            <div
              id="dropDown-menu"
              className={`absolute right-0 overflow-hdden -bottom-[197px] border transition-all duration-300 ${
                showProfileDropdown && "visible opacity-100"
              } ${!showProfileDropdown && "invisible opacity-0 "}`}
            >
              <ProfileDropdown />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PCNavbar;
