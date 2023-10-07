import { useEffect } from "react";
import { useSelector } from "react-redux";

export const colorBorderIfValue = () => {
  const { email, password } = useSelector((state) => state.loginSlice);

  useEffect(() => {
    //to prevent errors check if html title !== to the page we want to apply this style and return
    const documentTitle = document.title;

    if (documentTitle !== "Login") {
      return;
    }

    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("#submitBtn");

    inputs.forEach((input) => {
      if (input.value !== "") {
        input.style = `border: 1px solid white; transition: ease-in-out .15s`;
      }

      if (input.value === "") {
        input.style.border = "";
      }
    });

    if (email && password) {
      button.removeAttribute("disabled");
      button.style = `background-color: #00925d; color: #fff; transition: ease-in-out .15s`;
    } else {
      button.setAttribute("disabled", "disabled");
      button.style.background = ``;
      button.style.color = ``;
    }
  }, [email, password]);
};
