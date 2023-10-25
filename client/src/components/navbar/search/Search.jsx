import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSmall from "../../loading/LoadingSmall";
import SearchResult from "./SearchResult";
import {
  setSearchResult,
  setSearchValue,
} from "../../../features/slices/searchBarSlice/searchBarSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { isLoading, showSearchResult } = useSelector(
    (state) => state.searchBarSlice
  );

  //
  const searchData = 1;

  return (
    <div className="mt-2 rounded-t-md flex flex-col shadow-lg bg-[--dark-gray] overflow-hidden">
      {isLoading && <LoadingSmall className={"w-[25px] my-3 mx-auto"} />}

      {searchData && showSearchResult && (
        <div
          onClick={() => dispatch(setSearchResult())}
          className="flex flex-col overflow-y-scroll max-h-[75vh] lg:max-h-[57vh]"
        >
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      )}

      {!isLoading && !searchData && (
        <p className="text-center text-[--highlight-gray] text-md py-4">
          no result found
        </p>
      )}
    </div>
  );
};

export default Search;
