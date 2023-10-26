import React from "react";

const HomeTvCompanyChip = ({ icon, companyName }) => {
  return (
    <div
      id="home-tv-company-chip"
      className="flex items-center justify-center min-h-fit h-[80px] min-w-[13%] rounded-lg"
    >
      <img src={icon} alt={`${companyName}`} className="w-[90px]" />
    </div>
  );
};

export default HomeTvCompanyChip;
