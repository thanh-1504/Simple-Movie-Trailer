import React from "react";
import Banner from "../layout/Banner";
import MoviePopular from "../components/MoviePopular";
import MovieTopRated from "../components/MovieTopRated";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MoviePopular></MoviePopular>
      <MovieTopRated></MovieTopRated>
    </div>
  );
};

export default HomePage;
