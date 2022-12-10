import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tv-shows/TvShows";
import Detail from "./pages/movies/detail/Detail";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="wrapper">
      <div className="container">
        {!location.pathname.includes("/movies/") && <Header />}
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          ;
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/tv-shows" element={<TvShows />} />;
        </Routes>
      </div>
    </div>
  );
}

export default App;
