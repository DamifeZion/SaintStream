import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navLinkStyle = () => {
  return `flex items-center gap-3 text-[--light-gray] text-md font-medium`;
};

const PCFooter = () => {
  return (
    <div className="flex flex-col h-full">
      <ul
        id="links"
        className="flex items-center justify-between text-[--light-gray] gap-5"
      >
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

      <ul id="socials" className="flex justify-end gap-3 text-3xl mt-20">
        <a href="#">
          <AiFillInstagram className="hover:text-[--green]" />
        </a>

        <a href="#">
          <FaSquareFacebook className="hover:text-[--green]" />
        </a>

        <a href="#">
          <FaTwitterSquare className="hover:text-[--green]" />
        </a>

        <a href="#">
          <FaSquareGithub className="hover:text-[--green]" />
        </a>
      </ul>
    </div>
  );
};

export default PCFooter;
