import { NavLink } from "react-router-dom";

import { navLinks } from "../../utils/Constants";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navWrapper">
      {navLinks.map((navLink, index) => (
        <NavLink
          to={navLink.path}
          key={index}
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
          {navLink.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
