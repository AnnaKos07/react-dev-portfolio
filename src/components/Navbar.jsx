// Navbar.js
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


import "../App.css";

const Navbar = (props) => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const projects = () =>{
    navigate("/#projects");
  }

  // const gallery = () =>{
  //   navigate("/#gallery");
  // }

  const contact = () =>{
    navigate("/#contact");
  }

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
        <ul  className="menu">
        <li>
            <a href="/" onClick={goToHome} >Home</a>
          </li>
          <li>
            <a href="/#projects" onClick={projects}>Projects</a>
          </li>
          {/* <li>
            <a href="/#gallery" onClick={gallery} >Gallery</a>
          </li> */}
          <li>
            <a href="/#contact" onClick={contact}>
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
