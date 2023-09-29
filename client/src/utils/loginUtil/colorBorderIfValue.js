import { useEffect } from "react";
import { useSelector } from "react-redux";

export const colorBorderIfValue = () => {
  const { email, password } = useSelector((state) => state.loginSlice);

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button");

    inputs.forEach((input) => {
      if (input.value !== "") {
        input.style = `border: 1px solid white; transition: ease-in-out .15s`;
      }

      if (input.value === "") {
        input.style.border = "";
      }
    });

    if (email && password) {
      button.style = `background-color: #00925d; color: #fff; transition: ease-in-out .15s`;
    } else {
      button.style.background = ``;
      button.style.color = ``;
    }
    
  }, [email, password]);
};
