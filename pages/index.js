import React from 'react';
import AdvBanner from '../src/components/sections/AdvBanner';

import FAQ from '../src/components/sections/FAQ';
import Hero from '../src/components/sections/Hero';
import News from '../src/components/sections/News';
import PhotoGallery from '../src/components/sections/PhotoGallery';
import RHomeo from '../src/components/sections/RHomeo';
import Statistics from '../src/components/sections/Statistics';
import SuccessStories from '../src/components/sections/SuccessStories';
import ExpertsSays from '../src/components/sections/ExpertsSays';
import DonateBannerSection from '../src/components/sections/DonateBannerSection';

const index = () => {
  return (
    <>
      <Hero />
      <RHomeo />
      <SuccessStories />
      <Statistics />
      <ExpertsSays />
      <DonateBannerSection />
      <PhotoGallery homePage={true} imgCount={6} />

      {/* <News homePage={true} /> */}
      <FAQ />
      <AdvBanner />
    </>
  );
};

export default index;
