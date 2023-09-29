import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
const Movie = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetch
  );
  if (!data) return null;
  const { results, genre_ids } = data;
  return (
    <section className="mt-8 movie-list">
      <p className="mb-4 text-xl font-bold text-white">
        Popular Movies for you
      </p>
      <div className="flex items-center gap-x-4 ">
        {results.length > 0 &&
          results.map((item) => (
            <div className="cursor-pointer movie-card ">
              <img
                className="rounded-xl w-[200px] h-[150px] hover:scale-[1.07] ease-linear duration-200"
                src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="my-3 text-sm font-bold text-white">
                Spider Man: No Way Home 2
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
                <span className="mx-2 text-xs font-bold text-white">4.6</span>
                <span className="text-xs text-gray-500">| Action - Movie</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Movie;
