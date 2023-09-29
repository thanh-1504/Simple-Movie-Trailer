import React, { useEffect } from "react";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  // const navRef = useRef([]);
  // const pushNavRef = (ele) => navRef.current.push(ele);
  const navigate = useNavigate();
  // This formState is to simulate that when you successfully log in, the header will no longer display the login button.
  const formState = JSON.parse(sessionStorage.getItem("formState")) || null;
  // This headerRef and useEffect is used to hide the header when you scroll down and show the header when you scroll up.
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("mousewheel", (e) => {
      if (headerRef.current) {
        const scrollHeight = e.deltaY;
        if (scrollHeight > 0)
          headerRef.current.classList.add("show_header--up");
        if (scrollHeight < 0) {
          headerRef.current.classList.remove("show_header--up");
          headerRef.current.classList.add("show_header--down");
        }
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div
        ref={headerRef}
        className="header flex font-bold items-center justify-center translate-y-[-2%] text-white sticky z-9999 w-full  h-[50px] bg-black pl-10 "
      >
        <div>
          <NavLink
            to={"/"}
            // ref={pushNavRef}
            className={"mr-6 cursor-pointer home"}
            onClick={() => navigate("/")}
          >
            Home
          </NavLink>
          <div className="bar"> </div>
        </div>
        {
          <div>
            <span
              // ref={pushNavRef}
              onClick={() => navigate("/pageUpdating")}
              className="mr-8 cursor-pointer movie_realease"
            >
              Movie Realease
            </span>
            <div className="bar"></div>
          </div>
        }

        <div className="flex items-center ml-auto mr-8 cursor-pointer">
          <div onClick={() => navigate("/log_in")}></div>
          {formState ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          ) : (
            <div onClick={() => navigate("/log_in")}>Log In</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
