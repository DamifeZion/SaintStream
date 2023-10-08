import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import ToastWrapper from "../../components/toast/ToastWrapper";

const MovieLibrary = () => {
  useDocumentTitle("Movie Library");
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div>
      <Navbar />
      <ToastWrapper />
      MovieLibrary
    </div>
  );
};

export default MovieLibrary;
