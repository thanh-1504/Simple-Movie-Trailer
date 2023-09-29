import React from "react";
import Banner from "../layout/Banner";
import MoviePopular from "../components/MoviePopular";
import MovieTopRated from "../components/MovieTopRated";
import MovieUpComing from "../components/MovieUpComing";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <MoviePopular></MoviePopular>
      <MovieTopRated></MovieTopRated>
      <MovieUpComing></MovieUpComing>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
