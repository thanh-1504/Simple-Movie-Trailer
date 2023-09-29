export const apiEndPoint = "https://api.themoviedb.org/3/movie/";
export const apiKey = "api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const tmdb = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?${apiKey}`,
  getMovieDetail: (type, idMovie) =>
    type !== ""
      ? `https://api.themoviedb.org/3/movie/${idMovie}/${type}?${apiKey}`
      : `https://api.themoviedb.org/3/movie/${idMovie}?${apiKey}`,
  getMovieVideo: (type, idMovie) =>
    `https://api.themoviedb.org/3/movie/${idMovie}/${type}?${apiKey}`,
  getMovieYoutube: (key) => `https://www.youtube.com/embed/${key}`,
  imgOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
  img500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
  imgWidth500: (url) => `https://image.tmdb.org/t/p/w500/${url}?${apiKey}`,
  imgNetFlix: () =>
    "https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/5900db94-decb-4941-87d2-a54eaf165ecc/VN-vi-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg",
  imgPageUpdating: () =>
    "https://th.bing.com/th/id/R.d444a087458127e634df23982c85ef5d?rik=lpQU07ymgdZ1Yg&riu=http%3a%2f%2fwww.acvorganization.com%2fwebsite-update.jpg&ehk=COkmI2azW18r%2fuvEb1PZxNk2fb7tS3ov66vQB0Ec%2bVo%3d&risl=&pid=ImgRaw&r=0",
};
