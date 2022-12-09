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
                background: "#95bcf2",
              }
            : { background: "#fff" }
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
                background: "#95bcf2",
              }
            : { background: "#fff" }
        }
      >
        TV Shows
      </NavLink>
    </div>
  );
}

export default Navbar;
