import React from 'react';
import Appointment from '../src/components/sections/Appointment';
import Contact from '../src/components/sections/Contact';
import ELearning from '../src/components/sections/ELearning';
import FAQ from '../src/components/sections/FAQ';
import Hero from '../src/components/sections/Hero';
import LocationMap from '../src/components/sections/LocationMap';
import News from '../src/components/sections/News';
import PhotoGallery from '../src/components/sections/PhotoGallery';
import RHomeo from '../src/components/sections/RHomeo';
import Statistics from '../src/components/sections/Statistics';
import SuccessStories from '../src/components/sections/SuccessStories';
import TeamMembers from '../src/components/sections/TeamMembers';
import Testimonials from '../src/components/sections/Testimonials';

const index = () => {
  return (
    <>
      <Hero />
      <RHomeo />
      <ELearning />
      <Statistics />
      <TeamMembers />
      <SuccessStories />
      <Testimonials />
      <PhotoGallery />
      <Appointment />
      <FAQ />
      <News />
      <Contact />
      <LocationMap />
    </>
  );
};

export default index;
