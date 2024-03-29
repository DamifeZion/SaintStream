import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { PiCaretDown } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../../features/slices/userSlice/userSlice";
import ProfileDropdownPC from "./ProfileDropdownPC";
import { navbarSlice } from "../../../features/slices/navbarSlice/navbarSlice";
import { setSearchValue } from "../../../features/slices/searchBarSlice/searchBarSlice";
import Search from "../search/Search";

const browserLocation = window.location.pathname;
const inActiveStyle = `text-[--active-white] font-semibold text-md`;
const activeStyle = ` text-[--green] font-extrabold text-md`;

const PCNavbar = () => {
  const dispatch = useDispatch();
  const { user, sessionToken } = useSelector((state) => state.userSlice);
  const { showProfileDropdown } = useSelector((state) => state.navbarSlice);
  const { searchValue } = useSelector((state) => state.searchBarSlice);

  const handleLogout = () => {
    dispatch(userSlice.actions.logOut());
  };

  const toggleProfileDropdown = () => {
    dispatch(navbarSlice.actions.toggleProfileDropdown());
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
            className={`${
              browserLocation === "/movie_library" ? activeStyle : inActiveStyle
            }`}
            to={!sessionToken ? "/" : "/movie_library"}
          >
            Home
          </NavLink>

          <NavLink
            className={`${
              browserLocation === "/discover" ? activeStyle : inActiveStyle
            }`}
            to={"/discover"}
          >
            Discover
          </NavLink>

          <NavLink
            className={`${
              browserLocation === "/movie_release" ? activeStyle : inActiveStyle
            }`}
            to={"/movie_release"}
          >
            Movie Release
          </NavLink>

          <NavLink
            className={`${
              browserLocation === "/forum" ? activeStyle : inActiveStyle
            }`}
            to={"/forum"}
          >
            Forum
          </NavLink>

          <NavLink
            className={`${
              browserLocation === "/about" ? activeStyle : inActiveStyle
            }`}
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
                value={searchValue}
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
              <div
                id="large-screen-search-filter"
                className="absolute top-[70px] w-full max-w-[240px]"
              >
                <Search />
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
                className={`${
                  user?.image ? "bg-none" : "bg-[--green]"
                } w-[25px] h-[25px] flex items-center justify-center transition-all ease-linear duration-150 rounded-full`}
              >
                {user?.image && (
                  <img
                    src={user?.image}
                    alt="profile image"
                    className="w-full h-full object-cover"
                  />
                )}

                {!user?.image && <FaUser />}
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
              className={`absolute right-0 overflow-hdden -bottom-[210px] transition-all duration-300  ${
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
