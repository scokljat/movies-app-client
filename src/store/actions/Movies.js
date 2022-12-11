import MoviesService from "../../api/services/Movies";
import { FETCH_MOVIES, FETCH_MOVIE } from "../constants/ActionTypes";

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await MoviesService.getMovies();

    dispatch({ type: FETCH_MOVIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    const { data } = await MoviesService.getMovieById(id);

    dispatch({ type: FETCH_MOVIE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
