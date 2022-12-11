import { useNavigate } from "react-router-dom";

import "./Card.css";

function Card({ movie, isTvShow, setItemId }) {
  const navigate = useNavigate();

  return (
    <div
      className="cardWrapper"
      onClick={() => {
        navigate(isTvShow ? `/tv-shows/${movie.id}` : `/movies/${movie.id}`);
        setItemId(movie.id);
        console.log(movie.id);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        className="image"
        alt="movie"
      />
      <h1>{isTvShow ? movie.name : movie.title}</h1>
    </div>
  );
}

export default Card;
