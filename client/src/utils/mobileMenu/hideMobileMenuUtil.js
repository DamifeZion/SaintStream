import { useDispatch } from "react-redux";
import { mobileNavSlice } from "../../features/slices/mobileNavSlice/mobileNavSlice";
import { useEffect } from "react";

const handleMobileMenu = () => {
  const dispatch = useDispatch();

  const toggleShowMainMenu = () => {
    dispatch(mobileNavSlice.actions.setShowMainMenu());
  };

  //onclick on any of the menu item close the menu
  useEffect(() => {
    const mobileLinks = document.querySelectorAll("#mobile-links");

    mobileLinks.forEach((link) => {
      link.addEventListener("click", toggleShowMainMenu);
    });

    //clean up function
    return () => {
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", toggleShowMainMenu);
      });
    };
  }, []);

  return {
    toggleShowMainMenu,
  };
};

export default handleMobileMenu;
