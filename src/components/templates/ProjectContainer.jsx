import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ProjectContainer({ project }) {
  return (
    <div className="project-container">
      <img src={project.image} alt="" />
      <div className="project-data-container">
        <h4 className="project-title">{project.title}</h4>
        <p>{project.description}</p>
        {project.frontEndTechStack && (
          <p>
            <strong>Front end stack:</strong> {project.frontEndTechStack}
          </p>
        )}
        {project.backEndTechStack && (
          <p>
            <strong>Back end stack:</strong> {project.backEndTechStack}
          </p>
        )}
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> See project
        </a>
      </div>
    </div>
  );
};
