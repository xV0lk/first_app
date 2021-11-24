import { motion } from 'framer-motion';
import styled from 'styled-components';
import React from 'react';
import { pageAnimation, titleAnim } from '../src/animation';
import Navbar from '../components/Nav/Navbar';

const Contacto = () => (
  <>
    <Navbar />
    <SContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* <STitle> */}
      {/*  <SHide> */}
      {/*    <motion.h2 variants={titleAnim}>Contacto</motion.h2> */}
      {/*  </SHide> */}
      {/* </STitle> */}
      {/* <SHide> */}
      {/*  <SSocial variants={titleAnim}> */}
      {/*    <SCircle /> */}
      {/*    <h2>Envíanos un mensaje</h2> */}
      {/*  </SSocial> */}
      {/* </SHide> */}
      {/* <SHide> */}
      {/*  <SSocial variants={titleAnim}> */}
      {/*    <SCircle /> */}
      {/*    <h2>Envíanos un correo</h2> */}
      {/*  </SSocial> */}
      {/* </SHide> */}
      {/* <SHide> */}
      {/*  <SSocial variants={titleAnim}> */}
      {/*    <SCircle /> */}
      {/*    <h2>Redes Sociales</h2> */}
      {/*  </SSocial> */}
      {/* </SHide> */}
    </SContact>
  </>
);

const SContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 80vh;
  background: #fff;
`;

const STitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const SHide = styled.div`
  overflow: hidden;

  h2 {
    color: #353535;
  }
`;

const SCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const SSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  color: #353535;

  h2 {
    margin: 2rem;
    color: #353535;
  }
`;

export default Contacto;
