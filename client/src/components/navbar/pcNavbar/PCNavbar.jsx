import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiCaretDown } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../../features/slices/userSlice/userSlice";
import userImage from "../../../assets/user.svg";
import ProfileDropdownPC from "./ProfileDropdownPC";
import { pcNavbarSlice } from "../../../features/slices/pcNavBarSlice/pcNavbarSlice";
import { setSearchValue } from "../../../features/slices/searchBarSlice/searchBarSlice";
import SearchFilter from "../SearchFilter";

const browserLocation = window.location.pathname;
const activeStyle = `text-[--green] font-extrabold`;

const PCNavbar = () => {
  const dispatch = useDispatch();
  const { user, sessionToken } = useSelector((state) => state.userSlice);
  const { showProfileDropdown } = useSelector((state) => state.pcNavbarSlice);
  const { searchValue } = useSelector((state) => state.searchBarSlice);

  const handleLogout = () => {
    dispatch(userSlice.actions.logOut());
  };

  const toggleProfileDropdown = () => {
    dispatch(pcNavbarSlice.actions.toggleProfileDropdown());
  };

  return (
    <div className=" flex w-full text-md">
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
            className={`${browserLocation === "/movie_library" && activeStyle}`}
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
        <div className="flex items-center font-medium ml-auto max-w-[300px]">
          <div id="search-bar">
            <div id="search-input" className="relative mr-3">
              <input
                type="search"
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                placeholder="Enter movie name"
                className="w-full h-full bg-[--light-black] px-5 pr-9 py-3 rounded-full outline-none text-[--lighter-gray] placeholder:text-[--highlight-gray]"
              />

              <BiSearch
                strokeWidth={1.5}
                className="absolute top-1/2 -translate-y-1/2 right-3 text-[--highlight-gray] text-xl"
              />
            </div>

            {/* if there is a search value, we show a loading component if it is loading and if not we show results in a component */}
            {searchValue && (
              <div id="large-screen-search-filter">
                <SearchFilter />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 relative">
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
                className={`ml-1 text-[--action-white] text-lg group-hover:text-[--green] transition-all ease-linear duration-150  ${
                  showProfileDropdown && "rotate-180"
                }`}
              >
                <PiCaretDown />
              </span>
            </button>

            <div
              id="dropDown-menu"
              onClick={toggleProfileDropdown}
              className={`absolute right-0 overflow-hdden -bottom-[210px] transition-all duration-300 ${
                showProfileDropdown && "visible opacity-100"
              } ${!showProfileDropdown && "invisible opacity-0 "}`}
            >
              <ProfileDropdownPC />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PCNavbar;
