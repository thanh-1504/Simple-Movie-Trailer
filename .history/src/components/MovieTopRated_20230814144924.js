import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
const MovieCardItem = ({ item }) => {
  const { name, vote_average, poster_path, id } = item;
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  console.log(data);
  const genres = data?.genres || [];
  return (
    <div className="cursor-pointer select-none movie-card ">
      <img
        className="rounded-xl w-[200px] h-[150px] hover:scale-[1.07] ease-linear duration-200 object-cover"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
      />
      <p className="my-3 text-sm font-bold text-white max-w-[200px] truncate ">
        {name}
      </p>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          id="star"
        >
          <path
            fill="#f8b84e"
            d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
            color="#000"
            overflow="visible"
            transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
          ></path>
        </svg>
        <span className="mx-2 text-xs font-bold text-white">
          {vote_average}
        </span>
        {genres.slice(0, 2).map((item) => (
          <React.Fragment>
            <div className="flex items-center justify-center mr-[0.8px]">
              <span className="text-gray-500 h-[28px]">|</span>
              <span className="mx-[3px] text-xs text-gray-500">
                {item.name || "Updating"}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
const MovieTopRated = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;

  return (
    <section className="mt-8 movie-list">
      <p className="mb-4 text-xl font-bold text-white">Top Rated</p>
      <Swiper grabCursor spaceBetween={22} slidesPerView={"auto"}>
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id} className="swiper-movie-top--rated">
              <MovieCardItem item={item}></MovieCardItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default MovieTopRated;