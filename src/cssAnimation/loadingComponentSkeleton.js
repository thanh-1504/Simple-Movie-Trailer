import LoadingSkeleton from "./LoadingSkeleton";
import React from "react";
const BannerItemSkeleton = () => {
  return (
    <div className="relative">
      <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.67)]"></div>
      <LoadingSkeleton className=" w-full h-[600px]"></LoadingSkeleton>
    </div>
  );
};
const MovieCardItemSkeleton = () => {
  return (
    <div className="select-none movie-card">
      <LoadingSkeleton className="rounded-xl w-[200px] h-[150px]"></LoadingSkeleton>
      <LoadingSkeleton className="mt-2 mb-1 max-w-[150px] h-4 rounded-lg"></LoadingSkeleton>
      <div className="flex items-center">
        <LoadingSkeleton className="w-3 h-3 rounded"></LoadingSkeleton>
        <LoadingSkeleton className="w-2 h-3 mx-2 rounded-sm"></LoadingSkeleton>
        {new Array(2).fill(0).map((item) => (
          <React.Fragment>
            <div className="flex items-center justify-center mr-[0.8px]">
              <span className="text-gray-500 h-[28px]">|</span>
              <span className="mx-[3px] text-xs text-gray-500">
                <LoadingSkeleton className="mx-[3px] w-6 h-3 rounded"></LoadingSkeleton>
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { BannerItemSkeleton, MovieCardItemSkeleton };
