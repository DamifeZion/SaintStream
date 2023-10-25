import HomeHeaderSlide from "./HomeHeaderSlide";
import { setActiveButtonClass } from "../../../utils/setActiveButtonClass";
import { homeHeaderSlideData } from "../../../data/homeHeaderSlideData";
import { useSlideChanger } from "../../../hooks/useSlideChanger";
import { useRef } from "react";

const HomeHeaderSlider = () => {
  const sliderContainerRef = useRef(null);
  const { currentSlide, handleSetCurrentSlideBead, toggleAutoPlay } =
    useSlideChanger(sliderContainerRef, 20000);

  const buttonStyles =
    "w-[9px] h-[9px] bg-[--dark-gray-light] rounded-full hover:bg-[--highlight-gray] transition-bg ease-linear duration-100 lg:w-3 lg:h-3";

  return (
    <div
      id="home-header-slider"
      className="relative flex h-full w-full md:pt-0"
    >
      <div
        ref={sliderContainerRef}
        id="home-header-slider-item"
        className="w-full h-full flex items-center transition-all ease-in-out duration-1000"
      >
        <HomeHeaderSlide key={1} data={homeHeaderSlideData[currentSlide]} />
      </div>

      <div
        id="home-header-slider-btns"
        className="flex items-center justify-center gap-[5px] absolute w-full right-0 bottom-4 md:justify-end px-[--px]"
      >
        {homeHeaderSlideData.map((slide, index) => (
          <button
            key={index}
            id="home-header-slider-btn-bead"
            onClick={(e) => {
              setActiveButtonClass(e, "home-header-slider-btns");
              handleSetCurrentSlideBead(index, 1000); // Update the currentSlide state
            }}
            className={`${buttonStyles} ${
              index === currentSlide ? "active-home-header-slider-btn" : "" // Check if the button's index matches the currentSlide
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHeaderSlider;
