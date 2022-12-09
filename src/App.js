import "./App.css";
import Navbar from "./navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tv-shows/TvShows";
import Detail from "./pages/movies/detail/Detail";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />;
        <Route path="/movies/:id" element={<Detail />} />
        <Route path="/tv-shows" element={<TvShows />} />;
      </Routes>
    </div>
  );
}

export default App;
