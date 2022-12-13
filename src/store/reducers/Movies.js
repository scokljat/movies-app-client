import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_SEARCHED_MOVIES,
  FETCH_MOVIE_VIDEOS,
} from "../constants/ActionTypes";

const initialState = {
  movies: [],
  movie: {},
  movieVideos: [],
};

export const reducerMovies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return { ...state, movies: payload.results };
    case FETCH_MOVIE:
      return { ...state, movie: payload };
    case FETCH_SEARCHED_MOVIES:
      return { ...state, movies: payload.results };
    case FETCH_MOVIE_VIDEOS:
      return { ...state, movieVideos: payload.results };
    default:
      return state;
  }
};
