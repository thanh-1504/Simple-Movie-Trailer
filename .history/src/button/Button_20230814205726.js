import React from "react";

const Button = ({ type, onClick, children, className }) => {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className={`bg-black text-white w-[140px] h-[46px] rounded-lg font-bold ${className}`}
        type={type}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
