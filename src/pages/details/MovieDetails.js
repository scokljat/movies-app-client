import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../store/actions/Movies";
import "./Details.css";

function MovieDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.reducerMovies);

  useEffect(() => {
    dispatch(getMovieById(params.id));
  }, [dispatch, params]);

  return (
    <div className="detailContainer">
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt="movie"
        height="300px"
        width="40%"
      />
      <h1 className="title">{movie.title}</h1>
      <p className="description">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
