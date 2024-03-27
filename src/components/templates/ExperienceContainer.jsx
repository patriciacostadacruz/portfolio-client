import React from 'react';
import images from '../../images';

export default function ExperienceContainer ({
  experience,
  index,
  showExperience,
  toggleExperience,
}) {
  return (
    <div
      className={`experience-container ${
        showExperience === index ? 'expanded' : ''
      }`}
    >
      <div
        className="experience-header"
        onClick={() => toggleExperience(index)}
      >
        <h4 className="experience-title">{experience.title}</h4>
        <p className="experience-dates">{experience.dates}</p>
        {showExperience === index ? (
          <img className="arrow" src={images.arrowUp} alt="Arrow up" />
        ) : (
          <img className="arrow" src={images.arrowDown} alt="Arrow down" />
        )}
      </div>
      <div className="experience-detail">
        <section className="experience-data">
          <p className="experience-description">{experience.description}</p>
          <h5>Main skills used:</h5>
          <span className="experience-tags">
            {experience.tags.map((tag, index) => (
              <p className="skill-tag" key={index}>
                {tag}
              </p>
            ))}
          </span>
        </section>
        <section className="experience-company">
          {experience.logo && (
            <a
              href={experience.link ? experience.link : undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={experience.logo}
                style={{ height: '50px' }}
                alt="Company logo"
              />
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

