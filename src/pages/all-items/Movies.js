import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/card/Card";
import useDebounce from "../../components/search/UseDebounce";
import { getMovies, getSearchedMovies } from "../../store/actions/Movies";
import "./Layout.css";

function Movies({ text }) {
  const { movies } = useSelector((state) => state.reducerMovies);

  const dispatch = useDispatch();

  const debouncedSearch = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 3) {
      dispatch(getSearchedMovies(debouncedSearch));
    } else {
      dispatch(getMovies());
    }
  }, [dispatch, debouncedSearch]);

  return (
    <div className="cardContainer">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
