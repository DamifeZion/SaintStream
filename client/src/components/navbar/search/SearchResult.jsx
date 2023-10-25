import React from "react";
import img from "../../../assets/onePieceSearchResult.jpg";

const SearchResult = () => {
  

  return (
    <div
      id="search-result"
      className="flex items-center cursor-pointer w-full min-h-[80px] px-3 py-1 gap-4 transition-bg ease-linear duration-75 hover:bg-[--green-dark] group"
    >
      <img
        src={img}
        alt=""
        className="object-cover w-[50px] h-[50px] rounded-full"
      />

      <div id="search-result-text" className="flex flex-col">
        <h1 className="text-[--action-white] font-bold ">One Piece</h1>

        <h2
          id="search-result-main-movie-data"
          className="text-[--highlight-gray] text-sm font-normal group-hover:text-[--action-white]"
        >
          <span id="search-result-type" className="font-bold">
            Movie -
          </span>
          <span id="search-result-movie-episodes"> 1 Episode</span>
        </h2>

        <h3
          id="search-result-release-date"
          className="font-light text-[--highlight-gray] text-sm group-hover:text-[--action-white]"
        >
          2023
        </h3>
      </div>
    </div>
  );
};

export default SearchResult;
