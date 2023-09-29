import React from "react";

const Input = ({ type, className, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`rounded-lg outline-none ${className}`}
    />
  );
};

export default Input;
