import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function ProjectContainer({ project }) {
  const { t } = useTranslation("global");

  return (
    <div className="project-container">
      <img src={project.image} alt="" />
      <div className="project-data-container">
        <h4 className="project-title">{project.title}</h4>
        <p>{t(project.description)}</p>
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
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {t("see-project")}
        </a>
      </div>
    </div>
  );
};
