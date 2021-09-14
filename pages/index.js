import React from 'react';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

function Home() {
  return (
    <>
      <Head>
        <title>Test App</title>
      </Head>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
}

export default Home;
