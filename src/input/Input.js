import React from "react";
import { useController } from "react-hook-form";
const Input = ({ type, className, placeholder, control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <input
      // placeholder={placeholder}
      {...field}
      {...props}
      type={type}
      className={`rounded-lg outline-none ${className}`}
    />
  );
};

export default Input;
