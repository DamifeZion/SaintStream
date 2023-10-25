import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSlice } from "../../../features/slices/userSlice/userSlice";

const listStyle =
  "py-3 px-6 text-[14px] text-md bg-opacity-10 rounded-sm flex justify-between items-center border-b border-[#1f1d22] hover:bg-[--green] ";

const ProfileDropdownMobile = () => {
  const dispatch = useDispatch();
  const { showUserMenu } = useSelector((state) => state.navbarSlice);
  const { sessionToken } = useSelector((state) => state.userSlice);

  return (
    <ul
      id="user-dropdown-menu"
      className={`${
        showUserMenu ? "opacity-100 visible" : "opacity-0 invisible"
      } ease-linear duration-150 max-h-[60vh] w-full transition-opacity absolute left-1/2 -translate-x-1/2 top-[80px] overflow-y-scroll overflow-x-hidden px-[--px] rounded-t-lg`}
    >
      {/* If user is loggged in we show this */}
      {sessionToken && (
        <ol className="flex flex-col bg-[--dark-gray] w-full h-full rounded-t-lg uppercase">
          <NavLink>
            <li className={listStyle}>Account</li>
          </NavLink>

          <NavLink>
            <li className={listStyle}>Watchlist</li>
          </NavLink>

          <NavLink>
            <li className={listStyle}>Feedback</li>
          </NavLink>

          <NavLink>
            <li className={listStyle}>Terms/Privacy</li>
          </NavLink>

          <NavLink>
            <li
              onClick={() => dispatch(userSlice.actions.logOut())}
              className={`py-3 px-6 text-[14px] bg-opacity-10 rounded-sm flex justify-between items-center hover:bg-[--danger]`}
            >
              Logout
            </li>
          </NavLink>
        </ol>
      )}

    </ul>
  );
};

export default ProfileDropdownMobile;
