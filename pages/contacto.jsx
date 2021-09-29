import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';
import { pageAnimation } from '../src/animation';

const Contacto = () => {
  return (
    <SContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contacto</h1>
    </SContact>
  );
};

const SContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
`;

export default Contacto;
