import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

import { pageAnimation } from '../src/animation';
import Navbar from '../components/Nav/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Capture</title>
      </Head>
      <Navbar />
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
