import React from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

import { pageAnimation } from '../src/animation';

function Home() {
  Router.onRouteChangeStart = () => console.log('loading...');
  Router.onRouteChangeComplete = () => console.log('loaded');
  return (
    <>
      <Head>
        <title>Capture</title>
      </Head>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    </>
  );
}

export default Home;
