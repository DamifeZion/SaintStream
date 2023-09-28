import React from "react";

const HomeCard = () => {
  return (
    <div className=" overflow-hidden rounded-[14px] relative cursor-pointer p-1  hover:border-4 hover:border-[--light-gray] transition-all ease-linear duration-150 group select-none">
      <span className=" absolute top-0 left-0 w-full h-full group-hover:bg-black z-[5] group-hover:bg-opacity-30" />
      <img
        src="/src/assets/home-card1.png"
        alt=""
        className="cursor-pointer rounded-md "
      />

      <div
        style={{
          backgroundImage:
            " linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.2) 50%)",
        }}
        className="absolute top-0 left-0 h-full w-full p-4 500:px-5 500:py-6 1100:p-6"
      >
        <p className="capitalise overflow-hidden text-ellipsis relative font-inter z-[5] leading-snug text-md 400:leading-normal 400:whitespace-nowrap 400:text-sm 400:font-medium 500:text-md 500:font-semibold 800:text-sm 1000:text-sm ">
          Past & Current Seasons
        </p>

        <p className="capitalise relative z-[5] text-1xl font-medium 400:mt-2 400:text-2xl 600:font-normal 800:text-[22px] 800:mt-1 1000:text-2xl 1100:text-[22px] ">
          Tv shows
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
