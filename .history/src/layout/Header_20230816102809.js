import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function showHeader() {
  // const headerHeight = header.clientHeight;
  const windowHeight = window.addEventListener("scroll", () => {});
}
const header = document.querySelector(".header");
// console.log(header);

const Header = () => {
  const header = useRef();
  const navigate = useNavigate();
  return (header.current = (
    <div className="header flex font-bold items-center justify-center translate-y-[-2%] text-white fixed z-30 w-full  h-[50px] bg-black ">
      <span onClick={() => navigate("/")} className="mr-8 cursor-pointer">
        Home
      </span>
      <span className="mr-8 cursor-pointer">Discover</span>
      <span className="mr-8 cursor-pointer">Movie Realease</span>
    </div>
  ));
};
showHeader();

export default Header;
