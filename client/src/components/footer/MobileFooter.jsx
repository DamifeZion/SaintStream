import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navLinkStyle = () => {
  return `text-md font-medium 600:text-md`;
};

const navLinkLawStyle = () => {
  return `flex items-center text-[#868687] text-sm font-medium 600:text-sm `;
};

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-3 400:gap-7">
      <ul className="flex items-center justify-center gap-3 text-2xl 400:place-self-center 600:text-3xl">
        <a href="#">
          <AiFillInstagram />
        </a>

        <a href="#">
          <FaSquareFacebook />
        </a>

        <a href="#">
          <FaTwitterSquare />
        </a>

        <a href="#">
          <FaSquareGithub />
        </a>
      </ul>

      <ul className="flex items-center justify-between text-[--light-gray] place-self-center gap-2">
        <NavLink to={"/"} className={`${navLinkStyle()}`}>
          Home
        </NavLink>

        <span>/</span>

        <NavLink to={"/discover"} className={`${navLinkStyle()}`}>
          Discover
        </NavLink>

        <span>/</span>

        <NavLink to={"/influence"} className={`${navLinkStyle()}`}>
          Influence
        </NavLink>

        <span>/</span>

        <NavLink to={"/release"} className={`${navLinkStyle()}`}>
          Release
        </NavLink>
      </ul>

      <ul className="flex items-center justify-between place-self-center gap-3 700:justify-normal">
        <NavLink to={"/"} className={`${navLinkLawStyle}`}>
          Privacy policy
        </NavLink>

        <NavLink to={"/"} className={`${navLinkLawStyle}`}>
          Term of service
        </NavLink>

        <NavLink to={"/"} className={`${navLinkLawStyle}`}>
          Language
        </NavLink>
      </ul>

      <small className="text-center font-semibold text-[--light-gray]">
        © 2023
      </small>
    </div>
  );
};

export default MobileFooter;
