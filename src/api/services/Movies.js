import axios from "../http";

const MoviesService = {
  getMovies: () => {
    const url =
      "/movie/top_rated?api_key=8f785211e6cf5adfb92e23a8726c8145&language=en-US&page=1";
    return axios.get(url);
  },

  getMovieById: (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=8f785211e6cf5adfb92e23a8726c8145&language=en-US`;
    return axios.get(url);
  },

  getSearchedMovies: (text) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=8f785211e6cf5adfb92e23a8726c8145&language=en-US&query=${text}`;
    return axios.get(url);
  },

  getMovieVideos: (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8f785211e6cf5adfb92e23a8726c8145&language=en-US`;
    return axios.get(url);
  },
};

export default MoviesService;
