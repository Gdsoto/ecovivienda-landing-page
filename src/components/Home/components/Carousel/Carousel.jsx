import Image from 'next/image';
import React from 'react';

// Libs
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Assets
import banner from '../../../../static/img/banner/Banner.png';
import banner2 from '../../../../static/img/banner/Banner2.png';
import banner3 from '../../../../static/img/banner/Banner3.png';

const Slider = () => {
  return (
    <section>
      <Carousel showArrows={true} showThumbs={false} autoPlay interval={6000} infiniteLoop>
        <div>
          <Image src={banner} alt="" />
        </div>
        <div>
          <Image src={banner2} alt="" />
        </div>
        <div>
          <Image src={banner3} alt="" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
