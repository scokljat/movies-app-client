import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tv-shows/TvShows";
import MovieDetails from "./pages/details/MovieDetails";
import "./App.css";
import { useState } from "react";
import TvShowsDetails from "./pages/details/TvShowsDetails";

function App() {
  const location = useLocation();

  return (
    <div className="wrapper">
      <div className="container">
        {!location.pathname.includes("/movies/") &&
          !location.pathname.includes("/tv-shows/") && <Header />}
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          ;
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TvShows />} />
          ;
          <Route path="/tv-shows/:id" element={<TvShowsDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
