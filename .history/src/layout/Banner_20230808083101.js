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
  const { backdrop_path, original_title, release_date } = item;
  const date = new Date(release_date);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const dateRelease = `${month < 10 ? `0${month}` : month} ${
    day < 10 ? `0${day}` : day
  }, ${year}`;

  return (
    <div className="relative">
      <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.67)]"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
        className="object-center w-full h-[600px]"
      />

      <div className="absolute w-full banner-info left-16 top-13 ">
        <h2 className="mb-3 text-4xl font-bold text-white">{original_title}</h2>
        <p className="mb-3 text-sm text-gray-400">{dateRelease}</p>
        <div className="flex items-center justify-between w-[1024px]">
          <div className="">
            <p className=" mb-3 text-base font-bold text-white">Story Line</p>
            <p className="text-sm text-gray-400 max-w-[300px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              iusto explicabo aliquam vero aspernatur quidem earum quibusdam
              doloremque illum autem facilis sed fugiat delectus sint veniam
              repellendus, deserunt eveniet vitae!
            </p>
            <div className="cast">
              <p className="mt-6 mb-4 text-base font-bold text-white">
                Top Cast
              </p>
              <div className="flex gap-x-6">
                <div className="flex items-center">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    alt=""
                  />

                  <p className="ml-2 text-sm text-white">Nick Prese</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full mt-6">
          <Button className={"mr-6 bg-green-600 "}>Watch Now</Button>
          <Button
            className={
              "border-white border w-[160px] hover:bg-gray-400 hover:text-black"
            }
          >
            Add Watchlist
          </Button>
          <div>
            <Button
              className={
                " hover:bg-gray-400 hover:text-black relative left-[400px]"
              }
            >
              Like
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
