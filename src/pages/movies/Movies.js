import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { getMovies } from "../../store/actions/Movies";
import "./Movies.css";

function Movies() {
  const { movies } = useSelector((state) => state.reducerMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="cardContainer">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
