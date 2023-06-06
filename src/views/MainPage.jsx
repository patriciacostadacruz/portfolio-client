import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { toast } from 'react-hot-toast';
import { projects, experiences, references } from '../data';
import images from '../images';
import myCurriculum from '../files/pcc-cv.pdf';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesDown,
  faArrowUpRightFromSquare,
  faDownload,
  faEnvelope,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function MainPage() {
  const [showExperience, setShowExperience] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // handles changes in email form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !message) {
      toast.error('Name and message are required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address.');
      return;
    }
    try {
      await emailjs.sendForm(
        'service_v1x2fom',
        'template_x43vcff',
        e.target,
        '1-bfXLBdlmKTvIDHx'
      );
      toast.success('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error('Error sending email:', error);
    }
  };

  const toggleExperience = (index) => {
    if (showExperience === index) {
      setShowExperience(null);
    } else {
      setShowExperience(index);
    }
  };

  const renderExperiences = () => {
    return experiences.map((experience, index) => (
      <div
        className={`experience-container ${
          showExperience === index ? 'expanded' : ''
        }`}
        key={index}
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
    ));
  };

  const renderReferences = () => {
    return references.map((reference, index) => {
      return (
        <div key={index} className="reference-container">
          <p className="reference-content">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote" />{' '}
            {reference.content}{' '}
            <FontAwesomeIcon icon={faQuoteRight} className="quote" />
          </p>
          <a href={reference.link} target="_blank" rel="noopener noreferrer">
            {reference.giver}
          </a>
          <p className="reference-title">{reference.title}</p>
        </div>
      );
    });
  };

  return (
    <div className="portfolio-container">
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div id="home" className="portfolio-home-section">
        <img className="my-avatar" src={images.myPic} alt="My avatar" />
        <h1 className="my-name">Patrícia Costa da Cruz</h1>
        <p className="my-presentation">
          Software engineer, front & back end web apps developer.
        </p>
      </div>
      <Link
        className="navbar-options"
        activeClass="active"
        to="expertise"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        <FontAwesomeIcon className="arrow-down" icon={faAnglesDown} />
      </Link>
      <div id="expertise" className="portfolio-expertise-section">
        <h3 className="section-name">&lt; Expertise /&gt;</h3>
        <div className="skills-container">
          <section className="skill-container">
            <img src={images.frontend} alt="" />
            <h4 className="skills-title">Front end development</h4>
            <hr />
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Firebase</li>
            </ul>
          </section>
          <section className="skill-container">
            <img src={images.backend} alt="" />
            <h4 className="skills-title">Back end development</h4>
            <hr />
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </section>
          <section className="skill-container">
            <img src={images.tools} alt="" />
            <h4 className="skills-title">Tools & softwares</h4>
            <hr />
            <ul className="skills-list">
              <li>Postman</li>
              <li>Jira</li>
              <li>Swagger API</li>
              <li>Ubuntu OS</li>
              <li>JWT</li>
            </ul>
          </section>
        </div>
      </div>
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">&lt; Projects /&gt;</h3>
        {/* add dynamic image */}
        <div className="projects-container">
          {projects.length > 0 &&
            projects.map((project, index) => {
              return (
                <div key={index} className="project-container">
                  <img src={project.image} alt="" />
                  <div className="project-data-container">
                    <h4 className="project-title">{project.title}</h4>
                    <p>{project.description}</p>
                    {project.frontEndTechStack && (
                      <p>
                        <strong>Front end stack:</strong>{' '}
                        {project.frontEndTechStack}
                      </p>
                    )}
                    {project.backEndTechStack && (
                      <p>
                        <strong>Front end stack:</strong>{' '}
                        {project.backEndTechStack}
                      </p>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> See
                      project
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div id="experience" className="portfolio-experience-section">
        <h3 className="section-name">&lt; Experience /&gt;</h3>
        <div className="experiences-container">{renderExperiences()}</div>
      </div>
      <div id="references" className="portfolio-references-section">
        <h3 className="section-name">&lt; References /&gt;</h3>
        <div className="references-container">{renderReferences()}</div>
      </div>
      <div id="contact" className="portfolio-contact-section">
        <div className="contact-section">
          <h3 className="contact-sentance">Feel free to reach out!</h3>
          <div className="contact-methods">
            <a
              href="https://www.linkedin.com/in/patricia-costa-da-cruz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
            <a
              href="https://github.com/patriciacostadacruz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href={myCurriculum} download="patricia-costa-da-cruz_CV">
              <FontAwesomeIcon icon={faDownload} /> Download my CV{' '}
            </a>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact-form">
            <h4>You can also email me here:</h4>
            <form onSubmit={sendEmail}>
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Your message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
              <button type="submit">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} /> Send email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
