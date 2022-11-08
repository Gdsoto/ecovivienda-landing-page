import Image from 'next/image';
import React from 'react';

const Build = () => {
  return (
    <nav class={styles.contenedor_proyecto1}>
      <Image class={styles.Image_pro1} src="/Image/BELLAVISTA II.jpg" alt="" />
      <div class={styles.contenedortex}>
        <h1>Avance en la obra</h1>
      </div>
      <div class={styles.avance}>
        <Image class={styles.avance_Image} src="/Image/_MG_9828.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9832.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9825.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9834.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9838.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9844.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9858.JPG" alt="" />
        <Image class={styles.avance_Image} src="/Image/_MG_9859.JPG" alt="" />
      </div>
    </nav>
  );
};

export default Build;
