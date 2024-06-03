// Navbar.js
import PropTypes from "prop-types";

import "../App.css";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
        <a className="menu-head">
            --- Portfolio ---
          </a>
          <a href="https://www.linkedin.com/in/anna-kostrytsa0705/">by <span/>
            {props.firstName}
            <span>{props.lastName}</span>
          </a>
          <a href="mailto:hannakastrytsa@gmail.com">
            hannakastrytsa@gmail.com
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li className="menu-head"> --- Menu --- </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
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
