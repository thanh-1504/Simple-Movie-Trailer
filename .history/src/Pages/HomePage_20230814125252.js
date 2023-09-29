import React from "react";
import Banner from "../layout/Banner";
import MoviePopular from "../components/MoviePopular";
import MovieTopRated from "../components/MovieTopRated";
import MovieUpComing from "../components/MovieUpComing";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MoviePopular></MoviePopular>
      <MovieTopRated></MovieTopRated>
      <MovieUpComing></MovieUpComing>
    </div>
  );
};

export default HomePage;
