import PropTypes from 'prop-types';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div>
      <Link to={`/${props.name.toLowerCase().replace(/\s+/g, '-')}`} className="project-card">
        <div className="project-img">
          <img src={props.head_image} alt={props.name} />
        </div>
        <div className="project-content">
          <div className="project-title">
            <h1>{props.name}</h1>
            <p>{props.short_description}</p>
            <div className="responsibilities">
              {props.responsibilities.map((resp, index) => (
                <div className="resp" key={index}>
                  <p>{resp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  head_image: PropTypes.string.isRequired,
};

export default ProjectCard;
