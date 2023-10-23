import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BiSearch, BiSolidUser } from "react-icons/bi";
import { userSlice } from "../../../features/slices/userSlice/userSlice";

import { mobileNavSlice } from "../../../features/slices/mobileNavSlice/mobileNavSlice";
import ProfileDropdownMobile from "./ProfileDropdownMobile";
import { setSearchValue } from "../../../features/slices/searchBarSlice/searchBarSlice";
import SearchFilter from "../SearchFilter";

const browserLocation = window.location.pathname;

const inActiveStyle = `px-6 py-3 uppercase text-md border-b border-[#1f1d22] hover:bg-[--green]`;

const activeStyle = `${inActiveStyle} text-[--green] hover:text-[--action-white]`;

const MobileNavbar = () => {
  const dispatch = useDispatch();
  const { user, sessionToken } = useSelector((state) => state.userSlice);
  const { showMainMenu } = useSelector((state) => state.mobileNavSlice);
  const { searchValue } = useSelector((state) => state.searchBarSlice);

  const { showSearchBar } = useSelector((state) => state.mobileNavSlice);

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  return (
    <div className="flex flex-col items-center text-lg font-semibold z-[1000] w-full ">
      <div className="flex items-center justify-center gap-3">
        {sessionToken && (
          <button
            onClick={() => dispatch(mobileNavSlice.actions.setShowSearchBar())}
            className="text-3xl hidden max-[375px]:text-2xl text-[--highlight-gray] rounded-full max-[635px]:block"
          >
            <BiSearch strokeWidth={1.5} />
          </button>
        )}

        {/* This below navlink performs 2 diff functions: 1) No user: To direct to login. User: to dropDownProfileMenu*/}
        <NavLink to={!user && "/login"}>
          <button
            onClick={() => dispatch(mobileNavSlice.actions.setShowUserMenu())}
            className="p-2 text-2xl bg-[--green] rounded-full max-[375px]:text-xl"
          >
            <BiSolidUser />
          </button>
        </NavLink>
      </div>

      {/* below is when user toggles the menu button  */}
      {sessionToken && (
        <ul
          id="drop-downMenu"
          className={`${
            showMainMenu ? "opacity-100" : "opacity-0"
          } ease-linear duration-150 max-h-[60vh] w-full transition-opacity absolute left-1/2 -translate-x-1/2 top-[80px] overflow-y-scroll overflow-x-hidden px-[--px] rounded-t-lg`}
        >
          <ol className="flex flex-col bg-[--dark-gray] w-full h-full rounded-t-lg">
            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/movie_library"
                  ? activeStyle
                  : inActiveStyle
              }`}
              to={!sessionToken ? "/" : "/movie_library"}
            >
              Home
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/discover" ? activeStyle : inActiveStyle
              }`}
              to={"/discover"}
            >
              Discover
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/movie_release"
                  ? activeStyle
                  : inActiveStyle
              }`}
              to={"/movie_release"}
            >
              Movie Release
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/forum" ? activeStyle : inActiveStyle
              }`}
              to={"/forum"}
            >
              Forum
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/about" ? activeStyle : inActiveStyle
              }`}
              to={"/about"}
            >
              About
            </NavLink>
          </ol>
        </ul>
      )}

      {/* Profile dropdown to be shown if session token only */}
      {sessionToken && <ProfileDropdownMobile />}

      {/* search bar to be shown if width is less than 625px  */}

      <div
        id="mobile-screen-search-bar"
        className={`${
          showSearchBar ? "scale-100" : "scale-0"
        } absolute top-[79px] left-0 w-full transition-scale ease-linear duration-100 px-[--px]`}
      >
        <div id="search-input">
          <input
            type="search"
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
            placeholder="Enter movie name"
            className="shadow-md w-full h-full bg-[--dark-gray] pl-5 pr-[45px] py-4 text-md rounded-full outline-none text-[--lighter-gray] placeholder:text-[--highlight-gray]"
          />

          <button className="absolute top-1/2 -translate-y-1/2 right-6 text-1xl text-[--action-white] rounded-full">
            <BiSearch strokeWidth={1.5} />
          </button>
        </div>

        {/* if there is a search value, we show a loading component if it is loading and if not we show results in a component */}
        {searchValue && (
          <div id="search-filter">
            <SearchFilter />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
