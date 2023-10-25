import { useEffect } from "react";

export const setActiveButtonClass = (e_event, container_id) => {
  const buttonContainer = document.querySelector(`#${container_id}`);
  const buttons = buttonContainer.querySelectorAll("button");

  const target = e_event.target;

  buttons.forEach((button) => {
    button.classList.remove("active-home-header-slider-btn");
  });

  target.classList.add("active-home-header-slider-btn");
};
