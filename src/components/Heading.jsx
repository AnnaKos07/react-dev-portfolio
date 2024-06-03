import PropTypes from "prop-types";

const Heading = (props) => {
  return (
    <div className="heading hero-text">
      <h1>{props.firstWord} 
        <span> {props.secondWord}</span>
      </h1>
    </div>
  );
};

Heading.propTypes = {
  firstWord: PropTypes.string.isRequired,
};

export default Heading;
