import React from 'react';

// Components
import ProjectCards from './components/ProjectCards/ProjectCards';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Slider from './components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <Slider />
      <ProjectCards />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
