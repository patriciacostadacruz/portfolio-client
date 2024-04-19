import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../images/404.png';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation("global");

  return (
    <div className="error-section">
      <img src={errorImg} alt="Error png" />
      <p>Sorry, this page does not exist.</p>
      <Link to="/" className="error-home-button">
        Back to home page
      </Link>
    </div>
  );
}
