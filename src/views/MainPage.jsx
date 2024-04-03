import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { toast } from 'react-hot-toast';
import { projects, personalProjects, experiences, references, frontSkills, backSkills, toolsSkills } from '../data';
import images from '../images';
import myCurriculum from '../files/pcc-cv.pdf';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesDown,
  faDownload,
  faEnvelope,
  faArrowLeftRotate,
  faArrowRightRotate,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import SkilllsList from '../components/molecules/SkilllsList';
import ProjectContainer from '../components/templates/ProjectContainer';
import ExperienceContainer from '../components/templates/ExperienceContainer';
import Reference from '../components/templates/References';

export default function MainPage() {
  const [showExperience, setShowExperience] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [currentReferenceIndex, setCurrentReferenceIndex] = useState(0);
  const [carouselIntervalActive, setCarouselIntervalActive] = useState(true);

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
      toast.error('Error sending email...', error);
    }
  };

  const toggleExperience = (index) => {
    if (showExperience === index) {
      setShowExperience(null);
    } else {
      setShowExperience(index);
    }
  };

  const handleNextReference = () => {
    setCurrentReferenceIndex(
      (prevIndex) => (prevIndex + 1) % references.length
    );
    setCarouselIntervalActive(false);
  };

  const handlePrevReference = () => {
    setCurrentReferenceIndex((prevIndex) =>
      prevIndex === 0 ? references.length - 1 : prevIndex - 1
    );
    setCarouselIntervalActive(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselIntervalActive) {
        setCurrentReferenceIndex(
          (prevIndex) => (prevIndex + 1) % references.length
        );
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [carouselIntervalActive]);

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
          Full Stack Developer 📍 Barcelona, Spain
        </p>
        <p>~ Website undergoing reconstruction...</p>
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
          <SkilllsList
            image={images.frontend}
            skillsTitle="Front end development"
            skillsArray={frontSkills}
          />
          <SkilllsList
            image={images.backend}
            skillsTitle="Back end development"
            skillsArray={backSkills}
          />
          <SkilllsList
            image={images.frontend}
            skillsTitle="Tools & softwares"
            skillsArray={toolsSkills}
          />
        </div>
      </div>
      <div id="experience" className="portfolio-experience-section">
        <h3 className="section-name">&lt; Experiences /&gt;</h3>
        <div className="experiences-container">
          {experiences.map((exp) => {
            return (
              <ExperienceContainer
                key={exp}
                experience={exp}
                index={exp}
                showExperience={showExperience}
                toggleExperience={toggleExperience}
              />
            );
          })}
        </div>
      </div>
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">&lt; Personal projects /&gt;</h3>
        <div className="projects-container">
          {personalProjects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">&lt; Old school projects /&gt;</h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
      <div id="references" className="portfolio-references-section">
        <h3 className="section-name">&lt; References /&gt;</h3>
        <div className="references-container">
          <div className="reference-carousel">
            <button onClick={handlePrevReference}>
              <FontAwesomeIcon icon={faArrowLeftRotate} />
            </button>
            {references.map((reference, index) => (
              <Reference
                key={index}
                reference={reference}
                isActive={index === currentReferenceIndex}
              />
            ))}
            <button onClick={handleNextReference}>
              <FontAwesomeIcon icon={faArrowRightRotate} />
            </button>
          </div>
        </div>
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
              <button type="submit" className="email-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} /> Send email
              </button>
            </form>
          </div>
        </div>
      </div>
      <section>© Patrícia Costa da Cruz - 2024</section>
    </div>
  );
}
