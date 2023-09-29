import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/saintstream-logo.svg";
import PCNavbar from "./PCNavbar";
import MobileNavbar from "./MobileNavbar";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { mobileNavSlice } from "../../features/slices/mobileNavSlice/mobileNavSlice";

const Navbar = ({ contCn, logoCn }) => {
  const dispatch = useDispatch();
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const { user } = useSelector((state) => state.userSlice);
  const { showMainMenu } = useSelector((state) => state.mobileNavSlice);

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
      className={`${contCn} flex items-center justify-between h-[60px] px-[--px] relative py-10`}
    >
      <NavLink
        to="/"
        className={`${logoCn} z-[1000] ${user ? "w-[180px]" : "w-[230px]"} `}
      >
        <img src={logo} draggable="false" alt="" />
      </NavLink>

      {/* Below hides Mobile navbar */}
      {showMainMenu && (
        <span
          onClick={toggleShowMainMenu}
          className="absolute w-full h-screen z-[100] left-0 top-0"
        />
      )}

      <div className="w-4/6 flex justify-end">
        {isSmall ? <MobileNavbar /> : <PCNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
