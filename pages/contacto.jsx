import { motion } from 'framer-motion';
import styled from 'styled-components';
import React from 'react';
import { pageAnimation } from '../src/animation';
import Navbar from '../components/Nav/Navbar';

const Contacto = () => (
  <>
    <Navbar />
    <SContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    />
  </>
);

const SContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 80vh;
  background: #fff;
`;

export default Contacto;
