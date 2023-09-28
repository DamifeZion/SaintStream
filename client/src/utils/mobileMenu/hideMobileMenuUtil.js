import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useEffect } from "react";
import { mobileNavSlice } from "../../features/slices/mobileNavSlice/mobileNavSlice";

export const hideMobileMenuUtil = () => {
  const dispatch = useDispatch();
  const {showMainMenu} = useSelector(state => state.mobileNavSlice)

  const handleClick = useCallback(() => {
    dispatch(mobileNavSlice.actions.setShowMainMenu());
  }, [dispatch]);

  useEffect(() => {
    const mobileLinks = document.querySelectorAll("#mobile-links");
    mobileLinks.forEach((link) => {
      if (showMainMenu) {
        document.body.style = `overflow: hidden;`;
      } else {
        document.body.style = `overflow: auto;`;
      }
      link.addEventListener("click", handleClick);
    });

    return () => {
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [handleClick]);
};
