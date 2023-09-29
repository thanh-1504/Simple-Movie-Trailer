import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config";
import Button from "../button/Button";
const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  const dataBanner = data?.results || [];
  return (
    <React.Fragment>
      {dataBanner.length > 0 && (
        <Swiper grabCursor spaceBetween={40} slidesPerView={"auto"}>
          {dataBanner &&
            dataBanner.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </React.Fragment>
  );
};

const BannerItem = ({ item }) => {
  const { poster_path, backdrop_path, original_title } = item;
  console.log(item);
  return (
    <div className="relative">
      <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.67)]"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt=""
        className="object-center w-full h-screen"
      />

      <div className="absolute w-full banner-info bottom-32 left-16 ">
        <h2 className="text-4xl font-bold text-white">The Last Of Us</h2>
        <p className="mb-6 text-sm text-gray-400">
          9 Episodes . 2022 . Fantasy . Action
        </p>
        <div className="flex items-center justify-between w-[1024px]">
          <div>
            <Button className={"mr-6 bg-green-600"}>Watch Now</Button>
            <Button className={"border-white border w-[160px]"}>
              Add Watchlist
            </Button>
          </div>
          <div>
            <Button>Like</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
