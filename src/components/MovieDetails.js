import React from "react";
import Button from "../button/Button";
import useSWR from "swr";
import { fetcher, tmdb } from "../config";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import Header from "../layout/Header";
import MovieCardItem from "./MovieCardItem";
import Footer from "../layout/Footer";

const MovieUpComing = () => {
  // This tmdb is taken from the config file, the purpose is to no longer display the API endpoints.
  const { data, error } = useSWR(tmdb.getMovieList("upcoming"), fetcher);
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
              <MovieUpComingItem
                key={item.id}
                dataItem={item}
              ></MovieUpComingItem>
            ))}
      </div>
    </div>
  );
};

const MovieUpComingItem = ({ dataItem }) => {
  const navigate = useNavigate();
  const { title, poster_path, vote_average, release_date, id } = dataItem;
  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className="flex mb-3 cursor-pointer"
    >
      <div className="w-[75px] h-[90px] mt-1 flex-shrink-0">
        <img
          src={tmdb.img500(poster_path)}
          alt=""
          className="object-cover w-full h-full hover:scale-[1.07] ease-linear duration-200"
        />
      </div>
      <div className="ml-2">
        <h3 className="mb-1 text-sm font-bold text-white">{title}</h3>
        <p className="mb-1 text-xs text-gray-300">
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

const MovieMeta = ({ type, dataItem }) => {
  const { movieID } = useParams();
  const { show, toggle, setShow } = useModal();
  // This tmdb is taken from the config file, the purpose is to no longer display the API endpoints.
  const { data, error } = useSWR(tmdb.getMovieDetail(type, movieID), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { crew, cast } = data || [];
    const { poster_path, genres, release_date, title, vote_average } =
      dataItem || [];
    const directors = crew.filter(({ job }) => job === "Director");
    return (
      <div className="movie_detail flex max-w-[1280px] max-h-[450px]">
        <div className="flex movie_info bg-[#222222] px-3 py-3 mt-5 w-[987px] ">
          <div className="h-[400px]">
            <div className=" min-w-[300px]">
              <img
                src={tmdb.imgWidth500(poster_path)}
                alt=""
                className=" w-[300px] h-[400px] object-cover"
              />
              <div className="relative top-[-48px] bottom-0 bg-black-rgba w-[300px] h-12 max-w-[300px]">
                <Button
                  onClick={() => toggle()}
                  className={
                    "absolute left-[50%] translate-x-[-50%] border border-white top-[50%] translate-y-[-50%] "
                  }
                >
                  Trailer
                </Button>
              </div>
            </div>
          </div>
          {show && (
            <Modal>
              <MovieVideo></MovieVideo>
            </Modal>
          )}
          {window.addEventListener("click", (e) => {
            if (e.target.matches(".modal_outside")) setShow(!show);
          })}

          <div className="ml-4 text-white">
            <h2 className="mb-4 text-3xl text-red-400 mr-2 min-w-[281px]">
              {title}
            </h2>
            <p className="mb-1 text-sm text-textColor">
              Status: <span className="ml-2 text-white">Trailer</span>
            </p>
            <p className="mb-1 text-sm text-textColor">
              Directors:
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
              Genre:
              <span className="ml-2 text-white">
                {genres.map((item, index) => {
                  if (index === genres.length - 1)
                    return <span>{`${item.name}`}</span>;
                  return <span>{`${item.name}, `}</span>;
                })}
              </span>
            </p>
            <p className="mb-1 text-sm text-textColor ">
              Casts:
              <span className="ml-2 text-white ">
                {cast.slice(0, 6).map((item, index) => {
                  if (index === 5) return <span>{`${item.name}`}</span>;
                  return (
                    <span className="mr-[0.5px]">{`${item.name},  `}</span>
                  );
                })}
              </span>
            </p>
            <p className="flex items-center mb-1 text-sm text-textColor">
              User Score:
              <span className="ml-2 mr-1 text-white">
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
  } else {
    if (type === "video") {
      const { results } = data;
      if (!results) return null;
      return (
        <React.Fragment>
          {results.length > 0 &&
            results
              .slice(0, 1)
              .map((item) => (
                <iframe
                  key={item.id}
                  width="840"
                  height="460"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="Video Trailer Youtube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ))}
        </React.Fragment>
      );
    }
    if (type === "similar") {
      if (!data) return null;
      const { results } = data;
      return (
        <section className="mt-[140px]">
          <p className="mb-4 text-xl font-bold text-white">
            Similar Movies for you
          </p>
          <div className="flex items-center gap-x-4 max-w-[870px] ">
            {results.length > 0 && (
              <Swiper grabCursor spaceBetween={12} slidesPerView={"auto"}>
                {results &&
                  results.map((item) => (
                    <SwiperSlide className="swiper-movie-list" key={item.id}>
                      <MovieCardItem item={item}></MovieCardItem>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </section>
      );
    }
    if (type === "desc") {
      const { overview } = dataItem;
      return (
        <div className="bg-[#282828] max-w-[875px] mt-4 p-3  ">
          <p className="text-white uppercase text=gray-500 text-sm mb-2">
            Overview
          </p>
          <p className="text-[13px] leading-5 text-gray-400">{overview}</p>
        </div>
      );
    }
  }
};

const MovieVideo = () => {
  const { movieID } = useParams();
  // This tmdb is taken from the config file, the purpose is to no longer display the API endpoints.
  const { data, error } = useSWR(
    tmdb.getMovieDetail("videos", movieID),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results) return null;
  return (
    <React.Fragment>
      {results.length > 0 &&
        results
          .slice(0, 1)
          .map((item) => (
            <iframe
              key={item.id}
              width="840"
              height="460"
              src={tmdb.getMovieYoutube(item.key)}
              title="Video Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
    </React.Fragment>
  );
};

const MovieDetails = () => {
  const { movieID } = useParams();
  // This tmdb is taken from the config file, the purpose is to no longer display the API endpoints.
  const { data, error } = useSWR(tmdb.getMovieDetail("", movieID), fetcher);
  if (!data) return null;
  const itemData = data;
  return (
    <div className="h-auto">
      <Header></Header>
      <div className="pl-[30px]">
        <MovieMeta type="credits" dataItem={itemData}></MovieMeta>
        <MovieMeta type="desc" dataItem={data}></MovieMeta>
        <MovieMeta type="similar"></MovieMeta>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MovieDetails;
