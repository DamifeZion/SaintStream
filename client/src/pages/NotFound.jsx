import React from "react";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-500 text-white px-8 py-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">403 Forbidden</h1>
        <p className="text-lg mb-8">
          Oops! You don't have permission to access this page.
        </p>
        <button className="bg-white text-red-500 font-bold py-2 px-4 rounded focus:outline-none hover:bg-red-100">
          Go Back
        </button>
      </div>
    </div>
  );
};