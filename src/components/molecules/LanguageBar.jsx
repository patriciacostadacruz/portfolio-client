import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import i18n from '../../i18n.config'

export default function LanguageBar() {
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="lang">
      <FontAwesomeIcon icon={faGlobe} className="globe" />
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active-lang' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${i18n.language === 'es' ? 'active-lang' : ''}`}
        onClick={() => handleLanguageChange('es')}
      >
        ES
      </button>
    </div>
  );
}
