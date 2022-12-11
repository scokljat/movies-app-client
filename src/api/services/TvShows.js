import axios from "../http";

const TvShowsService = {
  getTvShows: () => {
    const url =
      "https://api.themoviedb.org/3/tv/top_rated?api_key=8f785211e6cf5adfb92e23a8726c8145&language=en-US&page=1";
    return axios.get(url);
  },

  getTvShowById: (id) => {
    console.log(id);
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=8f785211e6cf5adfb92e23a8726c8145&language=en-US`;
    return axios.get(url);
  },
};

export default TvShowsService;
