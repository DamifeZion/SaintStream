import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPlayCircleFill, BsBookmark } from "react-icons/bs";

const HomeHeaderSlide = ({ data }) => {
  const slideStyles = {
    backgroundImage: `url(${data.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      id="home-header-slide"
      style={slideStyles}
      className="flex items-end min-w-full h-screen min-h-[500px] max-h-[680px] "
    >
      <div
        id="hero-header-slide-text"
        className=" w-full h-[55%] flex flex-col justify-end pt-[5%] pb-10 px-[--px]  bg-movie_library_header_gradient text-sm md:text-lg"
      >
        <span
          id="hero-header-slide-text-movie-type"
          className="py-2 px-[18px] shadow-xl bg-[--black] text-[--action-white] tracking-wide font-extrabold rounded-full w-fit select-none"
        >
          {data.type}
        </span>

        <h1
          id="hero-header-slide-text-movie-title"
          className="mt-3 text-3xl font-extrabold lg:mt-8"
        >
          {data.title}
        </h1>

        <h3
          id="hero-header-slide-timeline"
          className="text-[--light-gray] mt-2 font-medium flex items-center lg:mt-4"
        >
          <span id="hero-header-slide-timeline-duration">
            {data.time.duration}
          </span>

          <span
            id="hero-header-slide-timeline-year"
            className="ml-[14px] relative before:absolute before:bg-[--light-gray] before:w-1 before:h-1 before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-[8.5px] "
          >
            {data.time.year}
          </span>

          {data.genre.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              id="hero-header-slide-timeline-genre"
              className="ml-[14px] relative before:absolute before:bg-[--light-gray] before:w-1 before:h-1 before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-[8.5px] flex flex-wrap"
            >
              {genre}
            </span>
          ))}
        </h3>

        <p
          id="hero-header-slide-description"
          className="mt-2 max-w-[550px] text-md 500:mt-5"
        >
          {data.description.length > 300
            ? `${data.description.substring(0, 300)}...`
            : `${data.description}`}
        </p>

        <div
          id="hero-slide-btns"
          className="mt-4 flex flex-wrap items-center text-md gap-5 select-none 500:mt-5 lg:text-lg"
        >
          <NavLink to={data.linkToPlay}>
            <button className="bg-[--green] py-2 px-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[--green-dark] transition-bg ease-linear duration-75 lg:px-5">
              <BsFillPlayCircleFill className="text-md 500:text-xl" />
              <span>Play Now</span>
            </button>
          </NavLink>

          <NavLink to={data.linkToWatchThriller}>
            <button className="bg-[--dark-gray-light] py-2 px-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[--dark-gray] transition-bg ease-linear duration-75 lg:py-[10px] lg:px-5">
              <BsFillPlayCircleFill className="text-md 500:text-xl" />
              <span>Watch Thriller</span>
            </button>
          </NavLink>

          <button className="border-[1.8px] border-[--action-white] py-[6px] px-2 rounded-lg font-bold flex items-center gap-2 bg-black bg-opacity-30 hover:border-[--green-dark] hover:text-[--green] transition-all ease-linear duration-75 md:py-2 md:px-5">
            <BsBookmark strokeWidth={0.5} className="text-1xl 500:text-xl" />
            <span className="hidden md:block">Add Watchlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderSlide;
