import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, getMovieVideos } from "../../store/actions/Movies";
import "./Details.css";

function MovieDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { movie, movieVideos } = useSelector((state) => state.reducerMovies);

  useEffect(() => {
    dispatch(getMovieById(params.id));
    dispatch(getMovieVideos(params.id));
  }, [dispatch, params]);

  return (
    <div className="detailContainer">
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
        alt="movie"
        height="300px"
        width="40%"
      />
      <h1 className="title">{movie?.title}</h1>
      <div className="genreContainer">
        {movie?.genres?.map((genre) => (
          <p key={genre?.id} className="genre">
            {genre?.name}
          </p>
        ))}
      </div>
      <p className="description">{movie?.overview}</p>
      <div className="videoContainer">
        {movieVideos?.map((video) => {
          if (video.type === "Trailer")
            return (
              <video width="320" height="240" autoplay controls key={video?.id}>
                <source
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/watch?v=${video?.key}`}
                  controls
                  autoplay
                  key={video?.id}
                />
              </video>
            );
        })}
      </div>
    </div>
  );
}
export default MovieDetails;
