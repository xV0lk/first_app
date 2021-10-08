import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { SDescription, SHide, SIwrapper, SLayout } from '../styles/styles';
import {
  fadeAnim,
  pageAnimation,
  photoAnim,
  titleAnim,
} from '../src/animation';
import Wave from './wave';

const AboutSection = () => {
  const [width, setWidth] = useState();
  const visible = width > 1100;

  useEffect(() => {
    setWidth(window.innerWidth);
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return (
    <SLayout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SDescription>
        <div className="title">
          <SHide>
            <motion.h2 variants={titleAnim}>Hacemos</motion.h2>
          </SHide>
          <SHide>
            <motion.h2 variants={titleAnim}>
              tus <span>sueños</span>
            </motion.h2>
          </SHide>
          <SHide>
            <motion.h2 variants={titleAnim}>realidad.</motion.h2>
          </SHide>
        </div>
        <motion.p variants={fadeAnim}>
          Cuéntanos sobre tu marca, somos profesionales capacitados para llevar
          tu proyecto a otro nivel.
        </motion.p>
        <Link href="/contacto" scroll={false} passHref>
          <motion.button variants={fadeAnim}>Contacto</motion.button>
        </Link>
      </SDescription>
      <SIwrapper>
        <motion.div variants={photoAnim}>
          <Image
            src="/home1.png"
            alt="Fotógrafo"
            objectFit="cover"
            layout="fill"
          />
        </motion.div>
      </SIwrapper>
      {visible && <Wave />}
    </SLayout>
  );
};

export default AboutSection;
