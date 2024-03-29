import { useEffect } from "react";
import { useSelector } from "react-redux";

export const colorBorderIfValue = () => {
  const {
    //
    userName,
    email,
    password,
    confirmPassword,
    policy,
  } = useSelector((state) => state.signUpSlice);

  useEffect(() => {
    //to prevent errors check if html title !== to the page we want to apply this style and return
    const documentTitle = document.title;

    if (documentTitle !== "Sign Up") {
      return;
    }

    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("#submitBtn");

    if (!button) {
      return;
    }

    inputs.forEach((input) => {
      if (input.value !== "") {
        input.style = `border: 1px solid white; transition: ease-in-out .15s`;
      }

      if (input.value === "") {
        input.style.border = "";
      }
    });

    if ((userName, email && password && confirmPassword && policy)) {
      button.removeAttribute("disabled");
      button.style = `background-color: #00925d; color: #fff; transition: ease-in-out .15s`;
    } else {
      button.setAttribute("disabled", "disabled");
      button.style.background = ``;
      button.style.color = ``;
    }
  }, [userName, email, password, confirmPassword, policy]);
};
