import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/saintstream-logo.svg";
import PCNavbar from "./pcNavbar/PCNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { mobileNavSlice } from "../../features/slices/mobileNavSlice/mobileNavSlice";

const Navbar = ({ contCn, logoCn, screensCn }) => {
  const dispatch = useDispatch();
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const { sessionToken } = useSelector((state) => state.userSlice);
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
      className={`${contCn} flex items-center justify-between h-[70px] border px-[--px] relative`}
    >
      <NavLink
        to="/"
        className={`${logoCn} z-[1000] ${sessionToken ? "w-[180px]" : "w-[220px]"} `}
      >
        <img src={logo} alt="" />
      </NavLink>

      {/* Below hides Mobile navbar */}
      {showMainMenu && (
        <span
          onClick={toggleShowMainMenu}
          className="absolute w-full h-screen z-[100] left-0 top-0"
        />
      )}

      <div className={`${screensCn} w-4/6 flex justify-end`}>
        {isSmall ? <MobileNavbar /> : <PCNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
