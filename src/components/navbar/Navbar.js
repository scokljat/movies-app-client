import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navWrapper">
      <NavLink
        to="movies"
        className="link"
        style={({ isActive }) =>
          isActive
            ? {
                //background: "#95bcf2",
                background: "#36baff",
                color: "#fff",
              }
            : { background: "#fff", color: "#000000" }
        }
      >
        Movies
      </NavLink>

      <NavLink
        to="tv-shows"
        className="link"
        style={({ isActive }) =>
          isActive
            ? {
                background: "#36baff",
                color: "#fff",
              }
            : { background: "#fff", color: "#000000" }
        }
      >
        TV Shows
      </NavLink>
    </div>
  );
}

export default Navbar;
