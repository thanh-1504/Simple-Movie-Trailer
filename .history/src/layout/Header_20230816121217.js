import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  useEffect(() => {
    if (!headerRef.current) return null;

    window.addEventListener("mousewheel", (e) => {
      const scrollHeight = e.deltaY;
      if (scrollHeight > 0) headerRef.current.classList.add("show_header--up");
      if (scrollHeight < 0) {
        headerRef.current.classList.remove("show_header--up");
        headerRef.current.classList.add("show_header--down");
      }
    });
  }, []);
  return (
    <div
      ref={headerRef}
      className="header flex font-bold items-center justify-center translate-y-[-2%] text-white fixed top-0 left-0 z-9999 w-full  h-[50px] bg-black "
    >
      <span onClick={() => navigate("/")} className="mr-8 cursor-pointer">
        Home
      </span>
      <span className="mr-8 cursor-pointer">Discover</span>
      <span className="mr-8 cursor-pointer">Movie Realease</span>
    </div>
  );
};

// const showHeader = () => {
//   const header = document.querySelector(".header");
//   console.log(header);
// };
// showHeader();
export default Header;
