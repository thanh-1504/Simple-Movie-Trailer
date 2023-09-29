import React from "react";
import { tmdb } from "../config";
const PageIsUpdating = () => {
  return (
    <div className="relative text-white">
      <img
        src={tmdb.imgPageUpdating()}
        alt=""
        className="object-center w-full h-screen"
      />
    </div>
  );
};

export default PageIsUpdating;
