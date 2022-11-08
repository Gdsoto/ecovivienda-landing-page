import React from 'react';

// Components
import ProjectCards from './components/ProjectCards/ProjectCards';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Slider from './components/Carousel/Carousel';
import Objetives from './components/Objetives/Objetives';

const Home = () => {
  return (
    <>
      <Slider />
      <ProjectCards />
      <Objetives />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
