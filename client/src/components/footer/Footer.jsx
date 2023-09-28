import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import MobileFooter from "./MobileFooter";
import PCFooter from "./PCFooter";

const navLinkLawStyle = () => {
  return `flex items-center gap-3 text-[#868687] text-sm font-medium `;
};

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <footer>
      <div className=" flex flex-col gap-5 400:w-4/5 400:mx-auto 1000:w-3/5 lg:w-full lg:flex-row lg:justify-between lg:items-start">
        <h4 className="font-semibold text-[17.5px] leading-tight text-[--lighter-gray] text-center 400:place-self-center 400:leading-7 500:text-1xl 600:text-2xl lg:text-[25px] lg:text-start lg:w-[29%] 1100:w-[27%] 1280:w-[23%]">
          Our platform is trusted by millions & features best updated movies all
          around the world.
        </h4>

        <div>{isMobile && <MobileFooter />}</div>
        <div>{!isMobile && <PCFooter />}</div>
      </div>

      {!isMobile && (
        <div className="flex justify-between mt-5">
          <ul className="flex items-center place-self-center gap-5">
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
      )}
    </footer>
  );
};

export default Footer;
