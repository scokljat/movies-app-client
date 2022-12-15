import MoviesService from "../../api/services/Movies";
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_SEARCHED_MOVIES,
  FETCH_MOVIE_VIDEOS,
} from "../constants/ActionTypes";
import { showToastMessage } from "../../components/toast/Toast";

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await MoviesService.getMovies();

    dispatch({ type: FETCH_MOVIES, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    const { data } = await MoviesService.getMovieById(id);

    dispatch({ type: FETCH_MOVIE, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};

export const getSearchedMovies = (text) => async (dispatch) => {
  try {
    const { data } = await MoviesService.getSearchedMovies(text);

    dispatch({ type: FETCH_SEARCHED_MOVIES, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};

export const getMovieVideos = (id) => async (dispatch) => {
  try {
    const { data } = await MoviesService.getMovieVideos(id);

    dispatch({ type: FETCH_MOVIE_VIDEOS, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};
