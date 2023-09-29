import React from "react";
import Button from "../button/Button";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetails = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/667538/credits?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  if (!data) return null;
  const { crew } = data || [];
  return (
    <div className="relative z-50 top-[55px] h-auto pl-[160px] ">
      <div className="bg-[#282828] max-w-[630px] mt-8 p-3  ">
        <p className="text-white uppercase text=gray-500 text-sm mb-2">
          Nội dung phim
        </p>
        <p className=" max-w-[600px] text-xs text-gray-400">
          Nhịp Đập Trái Tim kể về một ma cà rồng bán người tên là Seon
          Woo-hyeol, người đã không thể trở thành con người vào một ngày nào đó
          trong vòng 100 năm, và một người phụ nữ Joo In-hae, người không có một
          chút lễ nghi nào của con người, bắt đầu sống bên nhau và tìm thấy hơi
          ấm thật sự.
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
