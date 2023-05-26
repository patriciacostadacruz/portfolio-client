import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { projects, experiences, references } from '../data';
import myPic from '../images/pro-selfie.jpg';
import downArrow from '../images/arrow-down.png';
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';
import arrowDown from '../images/arrow-down-exp.png';
import arrowUp from '../images/arrow-up-exp.png';
import emailjs from 'emailjs-com';

export default function MainPage() {
  // starts displaying first image of each project
  const [currentSlides, setCurrentSlides] = useState(projects.map(() => 0));
  const [showExperience, setShowExperience] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handlePreviousSlide = (index) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((prevSlide, i) =>
        i === index && prevSlide > 0 ? prevSlide - 1 : prevSlide
      )
    );
  };

  const handleNextSlide = (index) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((prevSlide, i) =>
        i === index && prevSlide < projects[i].slides.length - 1
          ? prevSlide + 1
          : prevSlide
      )
    );
  };

  const renderSlides = (slides, index) => {
    const currentImage = slides[currentSlides[index]];
    return (
      <img
        key={currentSlides[index]}
        src={currentImage}
        alt={`Slide ${currentSlides[index] + 1}`}
        style={{ height: '300px', borderRadius: '25px' }}
        className="active-slide"
      />
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_v1x2fom',
        'template_x43vcff',
        e.target,
        '1-bfXLBdlmKTvIDHx'
      );
      console.log('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
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
      <div className="experience-container" key={index}>
        <div
          className="experience-header"
          onClick={() => toggleExperience(index)}
        >
          <h4 className="experience-title">{experience.title}</h4>
          <p className="experience-dates">{experience.dates}</p>
          {showExperience === index ? (
            <img className="arrow" src={arrowUp} alt="Arrow up" />
          ) : (
            <img className="arrow" src={arrowDown} alt="Arrow down" />
          )}
        </div>
        {showExperience === index && (
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
        )}
      </div>
    ));
  };

  const renderReferences = () => {
    return references.map((reference, index) => (
      <div className="reference-container" key={index}>
        <p>{reference.content}</p>
        {reference.link ? (
          <a href={reference.link} target="_blank" rel="noopener noreferrer">
            {reference.giver}
          </a>
        ) : (
          <span>{reference.giver}</span>
        )}
        <p>{reference.title}</p>
      </div>
    ));
  };

  return (
    <div className="portfolio-container">
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div id="home" className="portfolio-home-section">
        <img className="my-avatar" src={myPic} alt="My avatar" />
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
        <img className="arrow-down" src={downArrow} alt="Down arrow" />
      </Link>
      <h3 className="section-name">My expertise</h3>
      <div id="expertise" className="portfolio-expertise-section">
        <div className="skills-container">
          <section className="skill-container">
            <h4 className="skills-title">Front end development</h4>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Firebase</li>
            </ul>
          </section>
          <section className="skill-container">
            <h4 className="skills-title">Back end development</h4>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>Express</li>
              <li>Node</li>
              <li>Firebase</li>
            </ul>
          </section>
          <section className="skill-container">
            <h4 className="skills-title">Tools & softwares</h4>
            <ul className="skills-list">
              <li>MongoDB</li>
              <li>Postman</li>
              <li>Jira</li>
              <li>Swagger API</li>
              <li>Ubuntu OS</li>
              <li>JWT</li>
            </ul>
          </section>
        </div>
      </div>
      <h3 className="section-name">My projects</h3>
      <div id="projects" className="portfolio-projects-section">
        {/* add dynamic image */}
        <div className="projects-container">
          {projects.length > 0 &&
            projects.map((project, index) => {
              return (
                <div key={index} className="project-container">
                  <div className="slideshow-container">
                    {project.slides.length > 0 &&
                      renderSlides(project.slides, index)}
                  </div>
                  {project.slides.length > 0 && (
                    <div className="slide-buttons">
                      <button
                        className="previous-slide-btn"
                        onClick={() => handlePreviousSlide(index)}
                        disabled={currentSlides[index] === 0}
                      >
                        <img
                          src={arrowLeft}
                          alt="Arrow left"
                          className="arrow-left"
                        />
                      </button>
                      <button
                        className="next-slide-btn"
                        onClick={() => handleNextSlide(index)}
                        disabled={
                          currentSlides[index] === project.slides.length - 1
                        }
                      >
                        <img
                          src={arrowRight}
                          alt="Arrow right"
                          className="arrow-right"
                        />
                      </button>
                    </div>
                  )}
                  <div className="project-data-container">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
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
                      See project
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <h3 className="section-name">My experience</h3>
      <div id="experience" className="portfolio-experience-section">
        <div className="experiences-container">{renderExperiences()}</div>
      </div>
      <h3 className="section-name">My references</h3>
      <div id="references" className="portfolio-references-section">
        <div className="references-container">{renderReferences()}</div>
      </div>
      <div id="contact" className="portfolio-contact-section">
        <h3 className="contact-sentance">
          Have an exciting project you need help with? Looking for a motivated
          and organized, fast learner web developer?
        </h3>
        <h4>Feel free to reach out!</h4>
        <div className="contact-methods">
          <a
            href="https://www.linkedin.com/in/patricia-costa-da-cruz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/patriciacostadacruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <div className="contact-form">
            <h4>Send me an email, I'll answer as soon as I can!</h4>
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
                  rows={5}
                  cols={50}
                ></textarea>
              </label>
              <button type="submit">Send email</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
