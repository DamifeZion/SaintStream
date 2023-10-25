import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/saintstream-logo.svg";
import { HiMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import PCNavbar from "./pcNavbar/PCNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { mobileNavSlice } from "../../features/slices/mobileNavSlice/mobileNavSlice";
import {
  searchBarSlice,
  setSearchValue,
} from "../../features/slices/searchBarSlice/searchBarSlice";
import Search from "./search/Search";
import { twMerge } from "tailwind-merge";

const Navbar = ({ contCn, logoCn, screensCn }) => {
  const dispatch = useDispatch();
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const { sessionToken } = useSelector((state) => state.userSlice);
  const { showMainMenu } = useSelector((state) => state.mobileNavSlice);
  const { searchValue } = useSelector((state) => state.searchBarSlice);

  // Note: 635px is very important for the nav search with ctrl + f to see

  const toggleShowMainMenu = () => {
    if (!showMainMenu) {
      document.body.style = `overflow: hidden;`;
    } else {
      document.body.style = `overflow: auto;`;
    }
    dispatch(mobileNavSlice.actions.setShowMainMenu());
  };

  return (
    <div
      id="template"
      className={twMerge(
        "bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg flex items-center justify-between h-[80px] px-[--px] relative z-[10000]",
        contCn
      )}
    >
      <div
        id="menu-btn-&-logo"
        className="flex items-center gap-4  max-[375px]:gap-2 lg:w-fit relative"
      >
        {isSmall && sessionToken && (
          <button
            id="menu-btn"
            onClick={toggleShowMainMenu}
            className={`${
              showMainMenu && "text-[--green]"
            } text-[38px] transition-colors ease-linear duration-150 hover:text-[--green] max-[375px]:text-3xl`}
          >
            <HiMenu />
          </button>
        )}

        <NavLink
          to="/"
          id="logo"
          className={`${logoCn} z-[1000] ${
            sessionToken ? "w-[180px]" : "w-[220px]"
          } max-[375px]:w-[160px]`}
        >
          <img src={logo} alt="" />
        </NavLink>

        {isSmall && sessionToken && (
          <div id="medium-screen-search-box">
            <div
              id="search-bar"
              className="max-[635px]:w-0 max-[635px]:scale-0 transition-scale ease-linear duration-150 relative w-[280px] mr-4"
            >
              <input
                type="search"
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                placeholder="Enter movie name"
                className="w-full h-full bg-[--light-black] pl-5 pr-[45px] py-[13px] text-md rounded-full outline-none text-[--lighter-gray] placeholder:text-[--highlight-gray]"
              />

              <button className="text-[22px] text-[--highlight-gray] absolute right-4 top-1/2 -translate-y-1/2">
                <BiSearch strokeWidth={1.5} />
              </button>
            </div>

            {/* if there is a search value, we show a loading component if it is loading and if not we show results in a component */}
            {searchValue && (
              <div
                id="medium-screen-search-filter"
                className="hidden min-[635px]:block absolute top-[70px] max-w-[280px] w-full"
              >
                <Search />
              </div>
            )}
          </div>
        )}
      </div>

      <div className={`${screensCn}  flex items-center justify-end lg:w-4/6`}>
        {isSmall ? <MobileNavbar /> : <PCNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
