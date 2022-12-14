import axios from "../http";

const TvShowsService = {
  getTvShows: () => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    return axios.get(url);
  },

  getTvShowById: (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
    return axios.get(url);
  },

  getSearchedTvShows: (text) => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${text}`;
    return axios.get(url);
  },

  getTvShowVideos: (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
    return axios.get(url);
  },
};

export default TvShowsService;
