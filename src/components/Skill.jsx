import PropTypes from "prop-types";

const Skill = (props) => {
  return (
    <div className="skill">
      <div className="scevo">
        <p>{props.skill}</p>
      </div>
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;
