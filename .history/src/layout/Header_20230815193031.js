import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex font-bold items-center justify-center translate-y-[-2%] text-white fixed z-30 w-full  h-[50px] bg-black ">
      <span className="mr-8 cursor-pointer">Home</span>
      <span className="mr-8 cursor-pointer">Discover</span>
      <span className="mr-8 cursor-pointer">Movie Realease</span>
    </div>
  );
};

export default Header;
