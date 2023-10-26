import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import ToastWrapper from "../../components/toast/ToastWrapper";
import HomeHeaderSlide from "../../components/headers/homeHeaderSlide/HomeHeaderSlider";
import Footer from "../../components/footer/Footer";
import HomeTvCompanyChip from "../../components/HomeTvCompanyChip";
import { homeTvCompanyChip } from "../../data/homeData/homeTvChipData";

const MovieLibrary = () => {
  useDocumentTitle("Movie Library");
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div id="template" className="relative flex flex-col">
      <nav className="absolute top-0 w-full">
        <Navbar />
      </nav>

      <header id="home-header-slider" className="w-full overflow-hidden">
        <HomeHeaderSlide />
      </header>

      <div
        id="home-tv-companies"
        className="relative pt-10 flex items-center overflow-x-scroll gap-6 justify-between"
      >
        {homeTvCompanyChip.map((data, index) => (
          <HomeTvCompanyChip
            key={index}
            icon={data.icon}
            companyName={data.companyName}
          />
        ))}
      </div>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default MovieLibrary;
