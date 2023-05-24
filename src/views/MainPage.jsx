import React from 'react';

export default function MainPage() {
  return (
    <div className="portfolio-container">
      <div id="home" className="portfolio-home-section">
        <h1 className="my-name">Patrícia Costa da Cruz</h1>
        <p className="my-presentation">
          Software engineer, front & back end app developer.
        </p>
        {/* some image */}
      </div>
      <div id="expertise" className="portfolio-expertise-section">
        <h3 className="section-name">Expertise</h3>
        <div className="skills-container">
          <section className="skill-container">
            <h4>Front end</h4>
            <p>HTML - CSS - JavaScript - React</p>
          </section>
          <section className="skill-container">
            <h4>Back end</h4>
            <p>Express - Node</p>
          </section>
          <section className="skill-container">
            <h4>Tools & softwares</h4>
            <p>MongoDB - Postman - Swagger - Jira</p>
          </section>
        </div>
      </div>
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">Projects</h3>
        {/* add dynamic image */}
        {/* filter to be added*/}
        <div className="projects-container">
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Hubble's quest</h4>
            <p>
              After Hubble telescope was launched in 1990, alien populations
              have started being attacked by some alien monster. As part of the
              Independant Wizards Mission (IWM), your player is charged with a
              mission: go to planet BetaX-2 and kill the enemies to allow
              friendly and nice aliens to live in peace. <br />
              <strong>Front-end tech stack:</strong> HTML - CSS - JavaScript
            </p>
            <a
              href="https://patriciacostadacruz.github.io/Hubble-s-quest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See game
            </a>
          </div>
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Food-Folio</h4>
            <p>
              Food-Folio is a recipes app which allows users to see a wide
              variety of recipes and cooking steps, but also allows them to add
              their own recipes and save their favorites for quick access.
              <br />
              <strong>Front-end tech stack:</strong> HTML - CSS - JavaScript -
              Handlebars
              <br />
              <strong>Back-end tech stack:</strong> Node - Express - MongoDB
            </p>
            <a
              href="https://food-folio-app.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See app
            </a>
          </div>
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>investMate</h4>
            <p>
              investMate connects entrepreneurs and investors worldwide so that
              innovative ideas become successfull businesses.
              <br />
              <strong>Front-end tech stack:</strong> HTML - CSS - JavaScript -
              Charts.js - React
              <br />
              <strong>Back-end tech stack:</strong> Node - Express - MongoDB
              <br />
              <strong>Additonal tools used:</strong> Postman
            </p>
            <a
              href="https://investmate-pro.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See app
            </a>
          </div>
          <div className="project-container">
            <img src="" alt="proj img" />
            <h4>Firebase recipes app</h4>
            <p>
              Recipes app created as a training for Firebase apps using its
              different services such as functions, auth, hosting, storage, etc.
            </p>
            <br />
            <strong>Front-end tech stack:</strong> HTML - CSS - JavaScript -
            React - Firebase
            <br />
            <strong>Back-end tech stack:</strong> Node - Firebase
            <a
              href="https://fir-recipes-3f7d9.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See app
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
              <h4 className="experience-title">Job name @ company name</h4>
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
