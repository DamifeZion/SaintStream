import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import ToastWrapper from "../../components/toast/ToastWrapper";
import HomeHeaderSlide from "../../components/headers/homeHeaderSlide/HomeHeaderSlider";

const MovieLibrary = () => {
  useDocumentTitle("Movie Library");
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div className="relative flex flex-col">
      <nav className="absolute top-0 w-full">
        <Navbar />
      </nav>

      <header className="template min-h-screen w-full overflow-hidden">
        <HomeHeaderSlide />
      </header>
    </div>
  );
};

export default MovieLibrary;
