import React from "react";
import useSWR from "swr";
import { fetcher, tmdb } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardItem from "./MovieCardItem";
import { MovieCardItemSkeleton } from "../cssAnimation/loadingComponentSkeleton";

const MovieTopRated = () => {
  const { data, error } = useSWR(tmdb.getMovieList("top_rated"), fetcher);
  if (!data) return null;
  const { results } = data;
  // isLoading is used to simulate that when there is no data, the loading skeleton will be displayed.
  const isLoading = !data && !error;
  return (
    <section className="mt-8 movie-list">
      <p className="mb-4 text-xl font-bold text-white">Top Rated</p>
      <Swiper grabCursor spaceBetween={22} slidesPerView={"auto"}>
        {isLoading
          ? results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id} className="swiper-movie-top--rated">
                <MovieCardItemSkeleton item={item}></MovieCardItemSkeleton>
              </SwiperSlide>
            ))
          : results.length > 0 &&
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
