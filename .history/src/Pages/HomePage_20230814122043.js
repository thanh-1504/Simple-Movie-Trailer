import React from "react";
import Movie from "../layout/Movie";
import Banner from "../layout/Banner";
import MoviePopular from "../components/MoviePopular";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MoviePopular></MoviePopular>
    </div>
  );
};

export default HomePage;
