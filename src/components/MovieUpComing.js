import React from "react";
import useSWR from "swr";
import { fetcher, tmdb } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardItem from "./MovieCardItem";
import { MovieCardItemSkeleton } from "../cssAnimation/loadingComponentSkeleton";

const MovieUpComing = () => {
  const { data, error } = useSWR(tmdb.getMovieList("upcoming"), fetcher);
  if (!data) return null;
  const movies = data.results || [];
  // isLoading is used to simulate that when there is no data, the loading skeleton will be displayed.
  const isLoading = !data && !error;
  return (
    <section className="mt-8 movie-list">
      <p className="mb-4 text-xl font-bold text-white">Up Coming</p>
      <Swiper grabCursor spaceBetween={22} slidesPerView={"auto"}>
        {isLoading
          ? movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id} className="swiper-movie-top--rated">
                <MovieCardItemSkeleton item={item}></MovieCardItemSkeleton>
              </SwiperSlide>
            ))
          : movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id} className="swiper-movie-top--rated">
                <MovieCardItem item={item}></MovieCardItem>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default MovieUpComing;
