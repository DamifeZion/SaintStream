import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSlice } from "../../../features/slices/userSlice/userSlice";

const ProfileDropdownPC = ({ id, contCn }) => {
  const dispatch = useDispatch();

  const listStyle =
    "py-2 px-6 text-[14px] hover:bg-[--green] bg-opacity-10 rounded-sm flex justify-between items-center border-b border-[#1f1d22] hover:bg-green-600 ";

  return (
    <ul id={id} className={`${contCn} shadow-sm bg-[--dark-gray] rounded-md overflow-hidden`}>
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
          className={`py-2 px-6 text-[14px] bg-opacity-10 rounded-sm flex justify-between items-center hover:bg-[--danger]`}
        >
          Logout
        </li>
      </NavLink>
    </ul>
  );
};

export default ProfileDropdownPC;
