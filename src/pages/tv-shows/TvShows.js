import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { getTvShows } from "../../store/actions/TvShows";
import "../movies/Movies.css";

function TvShows() {
  const { tvShows } = useSelector((state) => state.reducerTvShows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvShows());
  }, [dispatch]);

  return (
    <div className="cardContainer">
      {tvShows.map((movie) => (
        <Card key={movie.id} movie={movie} isTvShow={true} />
      ))}
    </div>
  );
}

export default TvShows;
