import Image from 'next/image';

// Components
import React from 'react';

// Styles
import styles from './Gallery.module.scss';

// Assets
import one from '../../../../static/img/renders/1.jpeg';
import two from '../../../../static/img/renders/2.jpeg';
import three from '../../../../static/img/renders/3.jpeg';
import four from '../../../../static/img/renders/4.jpeg';
import five from '../../../../static/img/renders/5.jpg';
import six from '../../../../static/img/renders/6.jpeg';
import seven from '../../../../static/img/renders/7.jpeg';
import eight from '../../../../static/img/renders/8.jpeg';

const Gallery = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Galeria</h3>
      <div class={styles.row}>
        <Image src={one} alt="" />
        <Image src={two} alt="" />
        <Image src={three} alt="" />
        <Image src={four} alt="" />
        <Image src={five} alt="" />
        <Image src={six} alt="" />
        <Image src={seven} alt="" />
        <Image src={eight} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
