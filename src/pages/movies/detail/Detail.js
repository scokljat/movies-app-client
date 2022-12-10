import { useNavigate } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <img
        src="https://imgv3.fotor.com/images/homepage-feature-card/enhance-photo-of-three-girls-playing-in-the-sunflower-garden.png"
        alt="movie"
        width="100%"
        height="250px"
      />
      <h1 className="title"> Movie title</h1>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default Detail;
