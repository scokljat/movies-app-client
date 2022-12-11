import { FETCH_MOVIES, FETCH_MOVIE } from "../constants/ActionTypes";

const initialState = {
  movies: [],
  movie: {},
};

export const reducerMovies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return { ...state, movies: payload.results };
    case FETCH_MOVIE:
      return { ...state, movie: payload };

    default:
      return state;
  }
};
