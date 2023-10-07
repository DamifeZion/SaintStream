import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";

const MovieLibrary = () => {
  useDocumentTitle("Movie Library");
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div>
      MovieLibrary
      {JSON.stringify(user)}
    </div>
  );
};

export default MovieLibrary;
