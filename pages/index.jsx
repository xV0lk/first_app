import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

import { pageAnimation } from '../src/animation';

function Home() {
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
        style={{ backgroundColor: '#1b1b1b', fontFamily: 'Inter' }}
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    </>
  );
}

export default Home;
