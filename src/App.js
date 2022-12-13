import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Movies from "./pages/all-items/Movies";
import TvShows from "./pages/all-items/TvShows";
import MovieDetails from "./pages/details/MovieDetails";
import TvShowsDetails from "./pages/details/TvShowsDetails";
import "./App.css";

function App() {
  const location = useLocation();
  const [text, setText] = useState("");

  return (
    <div className="wrapper">
      <div className="container">
        {!location.pathname.includes("/movies/") &&
          !location.pathname.includes("/tv-shows/") && (
            <Header setText={setText} />
          )}
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies text={text} />} />
          ;
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TvShows text={text} />} />
          ;
          <Route path="/tv-shows/:id" element={<TvShowsDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
