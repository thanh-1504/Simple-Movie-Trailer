import React from "react";

const Header = () => {
  return (
    <div className="flex font-bold items-center justify-center translate-y-[-10%] text-white fixed z-50 w-full  h-[80px] ">
      <span className="mr-8 cursor-pointer">Home</span>
      <span className="mr-8 cursor-pointer">Discover</span>
      <span className="mr-8 cursor-pointer">Movie Realease</span>
    </div>
  );
};

export default Header;
