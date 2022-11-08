import Image from 'next/image';
import React from 'react';

import styles from './Objetives.module.scss';
import Logo from '../../../../static/img/ecovivienda-status.jpg';

const Objetives = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Objetivos</h3>
      <div className={styles.container_info}>
        <div className="container-text">
          <p>
            Luego de 12 años de incertidumbre y bajo la premisa de convertir a Tunja en Una Nueva Capital, la Administración del alcalde
            Alejandro Fúneme a través de Ecovivienda, estructura el proyecto de vivienda de interés social y prioritario (VIP-VIS)
            “Bellavista” como alternativa de solución para las familias caracterizadas en el grupo 3 de priorización, afectadas por los
            proyectos inconclusos Torres del Parque y Estancia del Roble y para las familias que anhelan el sueño de tener vivienda propia.
            El proyecto está inscrito ante el Ministerio de Vivienda, Ciudad y Territorio, con quienes se realizó la fase de estructuración
            y va dirigido a familias que no superen los 4 SMLV de ingresos en sus hogares y que cumplan los requisitos para aplicar al
            programa Nacional “Mi Casa Ya”. Bellavista cuenta con licencia de urbanismo y construcción concedida a partir de la Resolución
            N° 0415 del 07 de julio de 2022.
          </p>
        </div>
        <div>
          <Image src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Objetives;
