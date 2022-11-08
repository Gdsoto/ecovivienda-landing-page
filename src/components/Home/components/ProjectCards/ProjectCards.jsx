/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Components
import Image from 'next/image';

// Styles
import styles from './ProjectCards.module.scss';

// Assets
import bellavistaI from '../../../../static/img/bella-vista-1.png';
import bellavistaII from '../../../../static/img/bella-vista-2.png';
import renderSix from '../../../../static/img/renders/six.jpeg';
import renderFirst from '../../../../static/img/renders/first.jpeg';

const ProjectCards = () => {
  return (
    <section className={styles.cards_wrapper}>
      <h3 className={styles.title}>Nuestros proyectos</h3>
      <ul className={styles.cards}>
        <li>
          <a href="" className={styles.card}>
            <Image src={renderSix} alt="" />
            <div className={styles.card__overlay}>
              <div className={styles.card__header}>
                <picture>
                  <Image src={bellavistaI} alt="" />
                </picture>
              </div>
              <p className={styles.card__description}>Proyecto de apartamentos conformado por 580 viviendas VIP y 100 VIS</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className={styles.card}>
            <Image src={renderFirst} alt="" />
            <div className={styles.card__overlay}>
              <div className={styles.card__header}>
                <picture>
                  <Image src={bellavistaII} alt="" />
                </picture>
              </div>
              <p className={styles.card__description}>Proyecto de apartamentos conformado por 470 viviendas VIS</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ProjectCards;
