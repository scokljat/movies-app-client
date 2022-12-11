import { combineReducers } from "redux";

import { reducerMovies } from "./Movies";
import { reducerTvShows } from "./TvShows";

const rootReducer = combineReducers({
  reducerMovies: reducerMovies,
  reducerTvShows: reducerTvShows,
});

export default rootReducer;
