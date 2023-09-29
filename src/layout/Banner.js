import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdb } from "../config";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { BannerItemSkeleton } from "../cssAnimation/loadingComponentSkeleton";
const Banner = () => {
  // This tmdb is taken from the config file, the purpose is to no longer display the API endpoints.
  const { data, error } = useSWR(tmdb.getMovieList("popular"), fetcher);
  const dataBanner = data?.results || [];
  return (
    <React.Fragment>
      {dataBanner.length > 0 && (
        <Swiper
          className="swiper_banner"
          grabCursor
          spaceBetween={40}
          slidesPerView={"auto"}
        >
          {dataBanner &&
            dataBanner.slice(0, 4).map((item, index) => (
              <SwiperSlide key={item.id}>
                <BannerItem key={index} item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </React.Fragment>
  );
};

const BannerItem = ({ item }) => {
  const navigate = useNavigate();
  // This tmdb is taken from the config file, the purpose is to no longer display the API endpoints.
  const { data, error } = useSWR(
    tmdb.getMovieDetail("credits", item.id),
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  const { backdrop_path, original_title, release_date, overview, id } = item;
  const date = new Date(release_date);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const dateRelease = `${month < 10 ? `0${month}` : month} ${
    day < 10 ? `0${day}` : day
  }, ${year}`;
  // isLoading is used to simulate that when there is no data, the loading skeleton will be displayed.
  const isLoading = !data && !error;
  return (
    <div className="relative">
      {isLoading ? (
        <BannerItemSkeleton className=" w-full h-[600px]"></BannerItemSkeleton>
      ) : (
        <React.Fragment>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.67)] h-[620px]"></div>
          <img
            src={tmdb.imgOriginal(backdrop_path)}
            alt=""
            className="w-full h-[600px] object-cover"
          />

          <div className="absolute w-full banner-info left-16 top-[7.25rem] ">
            <h2 className="mb-3 text-4xl font-bold text-white">
              {original_title}
            </h2>
            <p className="mb-3 text-sm text-gray-100">{dateRelease}</p>
            <div className="flex items-center justify-between w-[1024px]">
              <div className="">
                <p className="mb-3 text-base font-bold text-white ">
                  Story Line
                </p>
                <p className="text-sm  max-w-[300px]  text-white ">
                  {overview}
                </p>
                <div className="cast">
                  <p className="mt-6 mb-4 text-base font-bold text-white">
                    Top Cast
                  </p>
                  <div className="flex gap-x-6">
                    {cast &&
                      cast.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full"
                            src={tmdb.imgOriginal(item.profile_path)}
                            alt=""
                          />

                          <p className="ml-2 text-sm text-white">{item.name}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full mt-6">
              <Button
                onClick={() => navigate(`/${id}`)}
                className={"mr-6 bg-green-600 "}
              >
                Watch Now
              </Button>
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
                    " hover:bg-gray-400 hover:text-black relative left-[570px] border border-white"
                  }
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Banner;
