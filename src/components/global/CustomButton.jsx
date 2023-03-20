import React, { useEffect, useState } from "react";

const CustomButton = ({ onclick, text }) => {
  return (
    <div
      onClick={onclick}
      className="active:scale-[0.99] active:brightness-125  active:shadow-black  active:shadow-inner  cursor-pointer row-span-1 transform transition-all duration-200 h-full w-full bg-gradient-to-r select-none from-blue1 to-foshi flex justify-center items-center rounded-md text-white text-lg font-bold"
    >
      {text}
    </div>
  );
};

export default CustomButton;
