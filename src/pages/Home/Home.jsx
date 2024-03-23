import React from 'react';
import About from '@/components/sections/About/About';
import Banner from '@/components/sections/Banner/Banner';
import Features from '@/components/sections/Features/Features';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import Appreciate from '@/components/sections/Appreciate/Appreciate';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Features />
      <Tokenomics />
      <Appreciate />
    </>
  );
};

export default Home;
