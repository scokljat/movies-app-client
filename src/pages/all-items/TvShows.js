import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { getSearchedTvShows, getTvShows } from "../../store/actions/TvShows";
import useDebounce from "../../components/search/UseDebounce";
import "./Layout.css";

function TvShows({ text }) {
  const { tvShows } = useSelector((state) => state.reducerTvShows);

  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(getSearchedTvShows(debouncedSearch));
    } else {
      dispatch(getTvShows());
    }
  }, [dispatch, debouncedSearch]);

  return (
    <div className="cardContainer">
      {tvShows.map((movie) => (
        <Card key={movie.id} movie={movie} isTvShow={true} />
      ))}
    </div>
  );
}

export default TvShows;
