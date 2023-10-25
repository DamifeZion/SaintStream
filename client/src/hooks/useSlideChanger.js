import { useEffect, useState } from "react";
import { homeHeaderSlideData } from "../data/homeHeaderSlideData";

export const useSlideChanger = (
  slider_container_ref,
  auto_fade_slider_interval
) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoplay] = useState(false);

  // Automatically increase the current slide
  let sliderInterval;

  useEffect(() => {
    const sliderDuration = auto_fade_slider_interval || 15000;

    const startAutoFade = () => {
      // Fade out current slide
      slider_container_ref.current.style.opacity = 0;

      setTimeout(() => {
        setCurrentSlide(
          (prevSlide) => (prevSlide + 1) % homeHeaderSlideData.length
        );
      }, sliderDuration / 14);

      // Update data after fade out
      setTimeout(() => {
        slider_container_ref.current.style.opacity = 1;
      }, sliderDuration / 14);
    };

    sliderInterval = setInterval(startAutoFade, sliderDuration);

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  //Below is for selecting the slide using the bead buttons

  const handleSetCurrentSlideBead = (index_number, fade_duration_number) => {
    // Prevent performing this function on the same index
    if (index_number === currentSlide) return;

    // Fade out current slide
    slider_container_ref.current.style.opacity = 0;

    setTimeout(() => {
      setCurrentSlide(index_number);
    }, fade_duration_number / 1.2);

    // Update data after fade out
    setTimeout(() => {
      slider_container_ref.current.style.opacity = 1;
    }, fade_duration_number);
  };

  return {
    currentSlide,
    handleSetCurrentSlideBead,
  };
};
