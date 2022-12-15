import TvShowsService from "../../api/services/TvShows";
import {
  FETCH_TVSHOWS,
  FETCH_TVSHOW,
  FETCH_SEARCHED_TVSHOWS,
  FETCH_TVSHOW_VIDEOS,
} from "../constants/ActionTypes";
import { showToastMessage } from "../../components/toast/Toast";

export const getTvShows = () => async (dispatch) => {
  try {
    const { data } = await TvShowsService.getTvShows();

    dispatch({ type: FETCH_TVSHOWS, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};

export const getTvShowById = (id) => async (dispatch) => {
  try {
    const { data } = await TvShowsService.getTvShowById(id);

    dispatch({ type: FETCH_TVSHOW, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};

export const getSearchedTvShows = (text) => async (dispatch) => {
  try {
    const { data } = await TvShowsService.getSearchedTvShows(text);

    dispatch({ type: FETCH_SEARCHED_TVSHOWS, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};

export const getTvShowVideos = (id) => async (dispatch) => {
  try {
    const { data } = await TvShowsService.getTvShowVideos(id);

    dispatch({ type: FETCH_TVSHOW_VIDEOS, payload: data });
  } catch (error) {
    showToastMessage(error.response.data.status_message, "error");
  }
};
