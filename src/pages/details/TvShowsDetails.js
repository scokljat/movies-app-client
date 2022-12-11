import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getTvShowById } from "../../store/actions/TvShows";
import "./Details.css";

function TvShowsDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { tvShow } = useSelector((state) => state.reducerTvShows);

  useEffect(() => {
    dispatch(getTvShowById(params.id));
  }, [dispatch, params]);

  return (
    <div className="detailContainer">
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w400${tvShow.poster_path}`}
        alt="movie"
        height="300px"
        width="40%"
      />
      <h1 className="title">{tvShow.name}</h1>
      <p className="description">{tvShow.overview}</p>
    </div>
  );
}

export default TvShowsDetails;
