import { NavLink } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { userSlice } from "../../../features/slices/userSlice/userSlice";

const ProfileDropdown = ({ id, contCn }) => {
  const dispatch = useDispatch();

  const listStyle =
    "py-2 px-6 text-[14px] hover:bg-[--green] bg-opacity-10 rounded-sm flex justify-between items-center";

  return (
    <ul id={id} className={`${contCn} py-1 px-1 bg-[--black] rounded-md`}>
      <NavLink>
        <li className={listStyle}>
          Account <RiAccountPinCircleLine fontSize={16} />
        </li>
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
          className={listStyle}
        >
          Logout
        </li>
      </NavLink>
    </ul>
  );
};

export default ProfileDropdown;
