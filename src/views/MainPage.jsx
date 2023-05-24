import React, { useState } from 'react';
import projects from '../data';
import images from '../images';

export default function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const renderSlides = (slides) => {
    return slides.map((slide, index) => (
      <img
        key={index}
        src={slide}
        alt={`Slide ${index + 1}`}
        className={index === currentSlide ? 'active-slide' : 'inactive-slide'}
      />
    ));
  };

  return (
    <div className="portfolio-container">
      <div id="home" className="portfolio-home-section">
        <h1 className="my-name">Patrícia Costa da Cruz</h1>
        <p className="my-presentation">
          Software engineer, front & back end web apps developer.
        </p>
        {/* some image */}
      </div>
      <div id="expertise" className="portfolio-expertise-section">
        <h3 className="section-name">My expertise</h3>
        <div className="skills-container">
          <section className="skill-container">
            <h4>Front end development</h4>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Firebase</li>
            </ul>
          </section>
          <section className="skill-container">
            <h4>Back end development</h4>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>Express</li>
              <li>Node</li>
              <li>Firebase</li>
            </ul>
          </section>
          <section className="skill-container">
            <h4>Tools, softwares & processes</h4>
            <ul className="skills-list">
              <li>MongoDB</li>
              <li>Postman</li>
              <li>Hira</li>
              <li>Swagger API</li>
              <li>Ubuntu OS</li>
              <li>JWT</li>
              <li>Agile methodologies</li>
            </ul>
          </section>
        </div>
      </div>
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">My projects</h3>
        {/* add dynamic image */}
        <div className="projects-container">
          {projects.length > 1 &&
            projects.map((project, index) => {
              return (
                <div key={index} className="project-container">
                  <div className="slideshow-container">
                    {project.slides.length > 1 && renderSlides(project.slides)}
                    <div className="slide-buttons">
                      <button
                        className="previous-slide-btn"
                        onClick={handlePreviousSlide}
                        disabled={currentSlide === 0}
                      >
                        Previous
                      </button>
                      <button
                        className="next-slide-btn"
                        onClick={handleNextSlide}
                        disabled={currentSlide === 0}
                      >
                        Next
                      </button>
                    </div>
                  </div>
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
                    <a href={project.link} className="project-link">
                      See project
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div id="experience" className="portfolio-experience-section">
        <h3 className="section-name">My experience</h3>
        <div className="experiences-container">
          <div className="experience-container">
            <div className="experience-header">
              {/* add logic to display detail when clicking on title */}
              <h4 className="experience-title">
                Front-end developer @ CookEatLike
              </h4>
              <p className="experience-dates">May 2023 - present</p>
            </div>
            <div className="experience-detail">
              <section className="experience-data">
                <p className="experience-description">
                  Working with two friends on a cooking streaming app side
                  project. I am in charge of creating the front-end logic. We
                  have regular meetups to discuss our goals, progress, next
                  steps and exchange opinions and knowledge.{' '}
                </p>
                <span className="experience-tags">
                  <p className="skill-tag">HTML</p>
                  <p className="skill-tag">CSS</p>
                  <p className="skill-tag">JavaScript</p>
                  <p className="skill-tag">React</p>
                  <p className="skill-tag">JWT</p>
                </span>
              </section>
              <section className="experience-company">
                <img src={images.interrogationPoint} alt="Company logo" />
              </section>
            </div>
          </div>
          <div className="experience-container">
            <div className="experience-header">
              {/* add logic to display detail when clicking on title */}
              <h4 className="experience-title">
                Technica Application Analyst II @ ADP Iberia
              </h4>
              <p className="experience-dates">October 2021 - present</p>
            </div>
            <div className="experience-detail">
              <section className="experience-data">
                <p className="experience-description">
                  Internal T2 level support for a Time & Attendance software
                  named Enterprise eTime. Diagnose and resolve issues related to
                  software configuration and upgrade, databases, servers,
                  interfaces, federation/login into the system , etc - for
                  high-profile clients.{' '}
                </p>
                <span className="experience-tags">
                  <p className="skill-tag">JSON</p>
                  <p className="skill-tag">SAML</p>
                  <p className="skill-tag">Oracle SQL Dev</p>
                  <p className="skill-tag">Postman</p>
                  <p className="skill-tag">Provisioning</p>
                  <p className="skill-tag">SaaS</p>
                  <p className="skill-tag">SSO</p>
                  <p className="skill-tag">Jira</p>
                  <p className="skill-tag">Team work</p>
                </span>
              </section>
              <section className="experience-company">
                <a
                  href="https://www.adp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={images.ADPlogo} alt="Company logo" />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div id="references" className="portfolio-references-section">
        <h3 className="section-name">My references</h3>
        <div className="references-container">
          <div className="reference-container">
            <p>
              "Patricia is a self starter and go getter. She’s got a good
              attitude and is well liked by her teammates. I admire her passion
              for development and know she will make a positive impact wherever
              she goes."
            </p>
            <a
              href="https://www.linkedin.com/in/gregory-alexander-b7970025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gregory Alexander
            </a>
            <p>AMS Sr Manager Global Technical Services @ ADP</p>
          </div>
          <div className="reference-container">
            <p>
              "From the first day, it was clear that Patri was not just one more
              student. She is a bright person and has worked hard, and has
              helped create a great environment with her classmates, always
              helping anyone in need. Ambitious and perfectionist, Patri has the
              best mindset for the programming world. I am sure the future holds
              incredible things for you, Patri!!"
            </p>
            <a
              href="https://www.linkedin.com/in/ale-bausa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alejandra Bausá Carmona
            </a>
            <p>Full stack web developer and teacher @ Freelance</p>
          </div>
          <div className="reference-container">
            <p>
              "If you combine hard work, analytical mindset, positive attitude,
              willingness to help and strive for the best results all the
              time... you get Patricia. Her work always went above and beyond my
              expectations and during the last 1,5 year I had a pleasure to
              guide Patricia, she managed to make a big footprint in our team.
              Patricia is very motivated, fast learner with great work ethics
              and big dreams. Her humor and empathy fostered a comforting work
              environment. I have no doubt that Patricia will continue to excel
              in her future endeavors and highly recommend her to any potential
              employer."
            </p>
            <a
              href="https://www.linkedin.com/in/%C5%A1tefan-halas-115b7658/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stefan Halas
            </a>
            <p>EMEA Manager Global Technical Sevrices @ ADP</p>
          </div>
        </div>
      </div>
      <div id="contact" className="portfolio-contact-section">
        <h3 className="section-name">
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
          {/* add email form */}
          <a href="mailto:patriciacstcz@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}
