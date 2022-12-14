import {
  FETCH_TVSHOWS,
  FETCH_TVSHOW,
  FETCH_SEARCHED_TVSHOWS,
  FETCH_TVSHOW_VIDEOS,
} from "../constants/ActionTypes";

const initialState = {
  tvShows: [],
  tvShow: {},
  tvShowVideos: [],
};

export const reducerTvShows = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TVSHOWS:
      return { ...state, tvShows: payload.results };
    case FETCH_TVSHOW:
      return { ...state, tvShow: payload };
    case FETCH_SEARCHED_TVSHOWS:
      return { ...state, tvShows: payload.results };
    case FETCH_TVSHOW_VIDEOS:
      return { ...state, tvShowVideos: payload.results };

    default:
      return state;
  }
};
