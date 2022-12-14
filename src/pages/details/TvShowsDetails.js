import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getTvShowById, getTvShowVideos } from "../../store/actions/TvShows";
import "./Details.css";

function TvShowsDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const { tvShow, tvShowVideos } = useSelector((state) => state.reducerTvShows);

  useEffect(() => {
    dispatch(getTvShowById(params.id));
    dispatch(getTvShowVideos(params.id));
  }, [dispatch, params]);
  console.log(tvShow);
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
      <div className="genreContainer">
        {tvShow?.genres?.map((genre) => (
          <p key={genre?.id} className="genre">
            {genre?.name}
          </p>
        ))}
      </div>
      <div className="innerContainer">
        <p className="informations">
          Number of seasons: {tvShow.number_of_seasons}
        </p>
        <p className="informations">
          Number of episodes: {tvShow.number_of_episodes}
        </p>
      </div>
      <p className="description">{tvShow.overview}</p>
      <div className="videoContainer">
        {tvShowVideos?.map((video) => {
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

      {isClicked ? (
        <>
          {tvShow?.seasons?.map((season) => (
            <div key={season?.id} className="seasonContainer">
              {" "}
              <h1 className="seasonTitle">{season?.name}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w400${season?.poster_path}`}
                alt="season"
                height="300px"
              />
              <p className="informations">
                Number of episodes: {season?.episode_count}
              </p>
              <p className="description">{season?.overview}</p>
            </div>
          ))}{" "}
          <p onClick={() => setIsClicked(false)} className="subtitle">
            Hide seasons
          </p>
        </>
      ) : (
        <h1 onClick={() => setIsClicked(true)} className="subtitle">
          More about seasons ...
        </h1>
      )}
    </div>
  );
}

export default TvShowsDetails;
