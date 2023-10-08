import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import Navbar from '../../components/navbar/Navbar'

const MovieLibrary = () => {
  useDocumentTitle("Movie Library");
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div>
      <Navbar/>
      MovieLibrary
    </div>
  );
};

export default MovieLibrary;
