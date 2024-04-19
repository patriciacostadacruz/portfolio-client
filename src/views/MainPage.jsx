import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { projects, personalProjects, experiences, references, frontSkills, backSkills, toolsSkills } from '../data';
import images from '../images';
import myCurriculum from '../files/pcc-cv.pdf';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEnvelope,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import SkillsList from '../components/molecules/SkillsList';
import ProjectContainer from '../components/templates/ProjectContainer';
import ExperienceContainer from '../components/templates/ExperienceContainer';
import Reference from '../components/templates/References';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const [showExperience, setShowExperience] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [currentReferenceIndex, setCurrentReferenceIndex] = useState(0);
  const [carouselIntervalActive, setCarouselIntervalActive] = useState(true);

  const { t } = useTranslation("global");

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
      toast.error(t("toaster.missing-fields"));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(t("toaster.invalid-email"));
      return;
    }
    try {
      await emailjs.sendForm(
        'service_v1x2fom',
        'template_x43vcff',
        e.target,
        '1-bfXLBdlmKTvIDHx'
      );
      toast.success(t("toaster.success"));
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error(t('toaster.error'), error);
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
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div id="home" className="portfolio-home-section">
        <img className="my-avatar" src={images.myPic} alt="My avatar" />
        <h1 className="my-name">Patrícia Costa da Cruz</h1>
        <p className="my-presentation">{t('intro.title')}</p>
      </div>
      <hr className="separator" />
      <div id="expertise" className="portfolio-expertise-section">
        <h3 className="section-name">&lt; {t('expertise')} /&gt;</h3>
        <div className="skills-container">
          <SkillsList
            image={images.frontend}
            skillsTitle={t('expertise-section.frontend')}
            skillsArray={frontSkills}
          />
          <SkillsList
            image={images.backend}
            skillsTitle={t('expertise-section.backend')}
            skillsArray={backSkills}
          />
          <SkillsList
            image={images.tools}
            skillsTitle={t('expertise-section.tools-softwares')}
            skillsArray={toolsSkills}
          />
        </div>
      </div>
      <hr className="separator" />
      <div id="experience" className="portfolio-experience-section">
        <h3 className="section-name">&lt; {t('experience')} /&gt;</h3>
        <div className="experiences-container">
          {experiences.map((exp, index) => {
            return (
              <ExperienceContainer
                key={exp}
                experience={exp}
                index={index}
                showExperience={showExperience}
                toggleExperience={toggleExperience}
              />
            );
          })}
        </div>
      </div>
      <hr className="separator" />
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">
          &lt; {t('personal-projects.title')} /&gt;
        </h3>
        <div className="projects-container">
          {personalProjects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
      <hr className="separator" />
      <div id="projects" className="portfolio-projects-section">
        <h3 className="section-name">
          &lt; {t('school-projects.title')} /&gt;
        </h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
      <hr className="separator" />
      <div id="references" className="portfolio-references-section">
        <h3 className="section-name">&lt; {t('references')} /&gt;</h3>
        <div className="references-container">
          <div className="reference-carousel">
            <button onClick={handlePrevReference}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {references.map((reference, index) => (
              <Reference
                key={index}
                reference={reference}
                isActive={index === currentReferenceIndex}
              />
            ))}
            <button onClick={handleNextReference}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <hr className="separator" />
      <div id="contact" className="portfolio-contact-section">
        <div className="contact-section">
          <h3 className="contact-sentance">
            {t('contact-section.disclaimer')}
          </h3>
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
              <FontAwesomeIcon icon={faDownload} />{' '}
              {t('contact-section.cv-action')}{' '}
            </a>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact-form">
            <h4>{t('contact-section.email-disclaimer')}</h4>
            <form onSubmit={sendEmail}>
              <label>
                {t('contact-section.name-field')}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                {t('contact-section.email-field')}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                {t('contact-section.message-field')}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
              <button type="submit" className="email-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                {t('contact-section.send-email')}
              </button>
            </form>
          </div>
        </div>
      </div>
      <section>© Patrícia Costa da Cruz - 2024</section>
    </div>
  );
}
