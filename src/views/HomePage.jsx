import React from 'react';

export default function HomePage() {
  return (
    <div className="portfolio-container">
      <div id="home" className="portfolio-home-section">
        <h1 className="my-name">Patrícia Costa da Cruz</h1>
        <p className="my-presentation">
          Software engineer, front & back end app developer.
        </p>
      </div>
      <div id="expertise" className="portfolio-expertise-section">
        <h3 className="section-name">Expertise</h3>
        <div className="skills-container">
          <section className="skill-container">
            <h4>Front end</h4>
            <p>Bladibla</p>
          </section>
          <section className="skill-container">
            <h4>Back end</h4>
            <p>Bladibla</p>
          </section>
          <section className="skill-container">
            <h4>Tools & softwares</h4>
            <p>Bladibla</p>
          </section>
        </div>
      </div>
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">Projects</h3>
        {/* add dynamic image */}
        {/* filter to be added*/}
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </article>
        <div className="projects-container">
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Project title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              See project
            </a>
          </div>
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Project title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              See project
            </a>
          </div>
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Project title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              See project
            </a>
          </div>
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Project title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              See project
            </a>
          </div>
        </div>
      </div>
      <div id="experience" className="portfolio-experience-section">
        <h3 className="section-name">Experience</h3>
        <div className="experiences-container">
          <div className="experience-container">
            <div className="experience-header">
              {/* add logic to display detail when clicking on title */}
              <h5 className="experience-title">Job name @ company name</h5>
              <p className="experience-dates">2019 - present</p>
            </div>
            <div className="experience-detail">
              <section className="experience-data">
                <p className="experience-description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.{' '}
                </p>
                <span className="experience-tags">
                  <p className="skill-tag">Bla</p>
                  <p className="skill-tag">Bla</p>
                  <p className="skill-tag">Bla</p>
                </span>
              </section>
              <section className="experience-company">
                <a
                  href="https://www.adp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="" alt="Company logo" />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div id="references" className="portfolio-references-section">
        <h3 className="section-name">References</h3>
        <div className="references-container">
          <div className="reference-container">
            <div className="reference-text">
              <p>Blablabla</p>
              <p>Reference giver</p>
              <p>Position & company</p>
            </div>
            <div className="reference-image">
              <img src="" alt="Ref giver avatar" />
            </div>
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
          {/* add email form */}
          <a href="mailto:patriciacstcz@gmail.com">Email</a>
          <a href="https://github.com/patriciacostadacruz">GitHub</a>
        </div>
      </div>
    </div>
  );
}
