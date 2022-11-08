import React from 'react';

// Styles
import styles from './Footer.module.scss';

// Icons
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h4>Ecovivienda</h4>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Proyectos</h4>
            <ul>
              <li>
                <a href="#">Bellavista I</a>
              </li>
              <li>
                <a href="#">Bellavista II</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>información</h4>
            <ul>
              <li>
                <a href="#">Fax: 6087406989</a>
              </li>
              <li>
                <a href="#">Teléfono móvil: 3142196351</a>
              </li>
              <li>
                <a href="#">contacto@ecovivienda.gov.co</a>
              </li>
              <li>
                <a href="#">Carrera 10 No. 21 - 33 Edificio San Francisco Plaza - 3 Piso - Tunja - Boyacá</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Nuestras redes</h4>
            <div className={styles.social_links}>
              <a href="https://www.facebook.com/EcoviviendaTunja" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/Ecoviviendaa" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/channel/UCVpuo3LuS5d0CAU8nmETzHw" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
