import { FETCH_TVSHOWS, FETCH_TVSHOW } from "../constants/ActionTypes";

const initialState = {
  tvShows: [],
  tvShow: {},
};

export const reducerTvShows = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TVSHOWS:
      return { ...state, tvShows: payload.results };
    case FETCH_TVSHOW:
      return { ...state, tvShow: payload };

    default:
      return state;
  }
};
