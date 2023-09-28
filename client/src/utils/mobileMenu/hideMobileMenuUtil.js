import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useEffect } from "react";
import { mobileNavSlice } from "../../features/slices/mobileNavSlice/mobileNavSlice";

export const hideMobileMenuUtil = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(mobileNavSlice.actions.setShowMainMenu());
  }, [dispatch]);

  useEffect(() => {
    const mobileLinks = document.querySelectorAll("#mobile-links");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [handleClick]);
};
