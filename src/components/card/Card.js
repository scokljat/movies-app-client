import { useNavigate } from "react-router-dom";

import "./Card.css";

function Card() {
  const navigate = useNavigate();

  return (
    <div
      className="cardWrapper"
      onClick={() => {
        navigate("/movies/50");
      }}
    >
      <img
        src="https://imgv3.fotor.com/images/homepage-feature-card/enhance-photo-of-three-girls-playing-in-the-sunflower-garden.png"
        alt="movie"
        width="100%"
        height="250px"
      />
      <h1> Movie title</h1>
    </div>
  );
}

export default Card;
