import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  FaSignInAlt,
  FaHome,
  FaCompass,
  FaFilm,
  FaComments,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { userSlice } from "../../features/slices/userSlice/userSlice";
import handleMobileMenu from "../../utils/mobileMenu/hideMobileMenuUtil";

const browserLocation = window.location.pathname;
const inActiveStyle = `tracking-wide w-full h-fit py-2 px-10 whitespace-nowrap text-center rounded-sm text-[--light-gray] hover:text-[--white] hover:bg-[#272C34] flex items-center justify-center gap-3`;

const activeStyle = `tracking-wide w-full h-fit py-2 px-10 whitespace-nowrap text-center rounded-sm text-[--green] border-2 border-[--green] font-extrabold hover:bg-[#272C34] flex items-center justify-center gap-3`;

const MobileNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);
  const { showMainMenu } = useSelector((state) => state.mobileNavSlice);

  //hide menu on click on any of the navlinks
  const { toggleShowMainMenu } = handleMobileMenu();

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  return (
    <div className="flex flex-col text-lg font-semibold relative z-[1000]">
      <div className="flex items-center justify-center gap-3">
        {user && (
          <button className="p-1 text-3xl bg-[--green] rounded-full">
            <BiSearch />
          </button>
        )}
        <span
          onClick={toggleShowMainMenu}
          className={`text-1xl py-[10px] px-[14px] bg-[--black] rounded-md cursor-pointer transition-bg ease-linear duration-150 hover:bg-[--dark-gray]`}
        >
          <HiMenuAlt3 />
        </span>
      </div>

      <ol
        className={`${
          showMainMenu ? "visible " : "translate-x-6 invisible opacity-0"
        } transition-all ease-linear duration-200 overflow-y-scroll bg-[#121014] absolute top-12 right-0 py-3 px-[4px] rounded-md flex flex-col-reverse gap-1 max-h-[60vh]`}
      >
        {!user && (
          <ul className="flex flex-col text-center">
            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/login" ? activeStyle : inActiveStyle
              } border-2 border-[--green] hover:bg-[--green] hover:text-[--white] transition-all ease-linear duration-150`}
              to={"/login"}
            >
              Sign in <FaSignInAlt />
            </NavLink>
          </ul>
        )}

        {user && (
          <ul className="flex flex-col">
            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/" ? activeStyle : inActiveStyle
              }`}
              to={!user ? "/" : "/movie_library"}
            >
              Home <FaHome />
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/discover" ? activeStyle : inActiveStyle
              }`}
              to={"/discover"}
            >
              Discover <FaCompass />
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
              Movie Release <FaFilm />
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/forum" ? activeStyle : inActiveStyle
              }`}
              to={"/forum"}
            >
              Forum <FaComments />
            </NavLink>

            <NavLink
              id="mobile-links"
              className={`${
                browserLocation === "/about" ? activeStyle : inActiveStyle
              }`}
              to={"/about"}
            >
              About <FaInfoCircle />
            </NavLink>

            <button
              onClick={handleLogOut}
              id="mobile-links"
              className={` py-2 px-10 text-[--light-gray] hover:bg-[--danger] hover:text-[--white] transition-bg ease-linear duration-150 flex items-center justify-center gap-3`}
            >
              Log out <FaSignOutAlt />
            </button>
          </ul>
        )}
      </ol>
    </div>
  );
};

export default MobileNavbar;
