// Navbar.js
import PropTypes from "prop-types";

import "../App.css";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="mailto:hannakastrytsa@gmail.com">
            Get in touch
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
