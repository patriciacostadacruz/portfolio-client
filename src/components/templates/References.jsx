import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Reference({ reference, isActive }) {
  const { t } = useTranslation("global");

  return (
    <div className={`reference-container ${isActive ? 'active' : ''}`}>
      <p className="reference-content">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote" />{' '}
        {t(reference.content)}{' '}
        <FontAwesomeIcon icon={faQuoteRight} className="quote" />
      </p>
      <a href={reference.link} target="_blank" rel="noopener noreferrer">
        {reference.giver}
      </a>
      <p className="reference-title">{t(reference.title)}</p>
    </div>
  );
};

