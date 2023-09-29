import React from "react";
import Button from "../button/Button";
import useSWR from "swr";
import { fetcher } from "../config";
import { useParams } from "react-router-dom";
const MovieUpComing = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  if (!data) return null;
  const movies = data?.results || [];
  return (
    <div className="mt-8 ml-[20px]">
      <h2 className="text-[#cf966a] text-3xl">Coming Soon</h2>
      <p className="text-gray-500 mt-[-1px]">-------------------------------</p>
      <div className="flex flex-col">
        {movies.length > 0 &&
          movies
            .slice(0, 6)
            .map((item) => (
              <MovieUpComingItem dataItem={item}></MovieUpComingItem>
            ))}
      </div>
    </div>
  );
};

const MovieUpComingItem = ({ dataItem }) => {
  const { title, poster_path, vote_average, release_date } = dataItem;
  return (
    <div className="flex">
      <div className="w-[75px] h-[90px] mt-1 flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="ml-2">
        <h3 className="text-white font-bold text-sm">{title}</h3>
        <p className="text-gray-300 text-xs">
          {new Date(release_date).getFullYear()}
        </p>
        <div className="flex items-center">
          <span className="mr-[0.5px] text-white text-xs">{vote_average}</span>
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
        </div>
      </div>
    </div>
  );
};
const MovieInfo = ({ dataItem }) => {
  const { movieID } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  if (!data) return null;
  const { crew, cast } = data || [];
  const { poster_path, genres, release_date, title, vote_average } =
    dataItem || [];
  const directors = crew.filter(({ job }) => job === "Director");
  return (
    <div className="movie_detail flex max-w-[1280px] max-h-[450px]">
      <div className="flex movie_info bg-[#222222] px-3 py-3 mt-5 max-w-[834px] ">
        <div className="h-[400px]">
          <div className="relative min-w-[300px]">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`}
              alt=""
              className=" w-[300px] h-[400px] object-cover"
            />
            <div className="absolute bottom-0 bg-black-rgba w-[300px] h-12 max-w-[300px]">
              <Button
                className={
                  "absolute left-[50%] translate-x-[-50%] border border-white top-[50%] translate-y-[-50%] "
                }
              >
                Trailer
              </Button>
            </div>
          </div>
        </div>
        <div className="ml-4 text-white">
          <h2 className="mb-4 text-3xl text-red-400 mr-2 min-w-[281px]">
            {title}
          </h2>
          <p className="mb-1 text-sm text-textColor">
            Status: <span className="ml-2 text-white">Trailer</span>
          </p>
          <p className="mb-1 text-sm text-textColor">
            Directors:{" "}
            <span className="ml-2 text-white">
              {directors.map((item) => item.name)}
            </span>
          </p>
          <p className="mb-1 text-sm text-textColor">
            Publishing Year:
            <span className="ml-2 text-white">
              {new Date(release_date).getFullYear()}
            </span>
          </p>
          <p className="mb-1 text-sm text-textColor">
            Genre:{" "}
            <span className="ml-2 text-white">
              {genres.map((item, index) => {
                if (index === genres.length - 1)
                  return <span>{`${item.name}`}</span>;
                return <span>{`${item.name}, `}</span>;
              })}
            </span>
          </p>
          <p className="mb-1 text-sm text-textColor ">
            Casts:{" "}
            <span className="ml-2 text-white ">
              {cast.slice(0, 6).map((item, index) => {
                if (index === 5) return <span>{`${item.name}`}</span>;
                return <span className="mr-[0.5px]">{`${item.name},  `}</span>;
              })}
            </span>
          </p>
          <p className="mb-1 text-sm text-textColor flex items-center">
            User Score :
            <span className="ml-2 text-white mr-1">
              {Math.ceil(vote_average)}
            </span>
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
          </p>
        </div>
      </div>
      <MovieUpComing></MovieUpComing>
    </div>
  );
};

const MovieDecs = ({ dataItem }) => {
  const { overview } = dataItem;
  return (
    <div className="bg-[#282828] max-w-[821px] mt-4 p-3  ">
      <p className="text-white uppercase text=gray-500 text-sm mb-2">
        Overview
      </p>
      <p className="text-xs text-gray-400">{overview}</p>
    </div>
  );
};
const MovieDetails = () => {
  const { movieID } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0`,
    fetcher
  );
  if (!data) return null;
  const itemData = data;
  return (
    <div className="relative z-50 top-[55px] h-auto pl-[100px] ">
      <MovieInfo dataItem={itemData}></MovieInfo>
      <MovieDecs dataItem={data}></MovieDecs>
    </div>
  );
};

export default MovieDetails;
