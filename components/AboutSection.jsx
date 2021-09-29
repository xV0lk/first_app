import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { SDescription, SHide, SIwrapper, SLayout } from "../styles/styles";
import { fade, photoAnim, titleAnim } from "../src/animation";
import Wave from "./wave";

const AboutSection = () => {
  return (
    <SLayout>
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
        <motion.p variants={fade}>
          Cuéntanos sobre tu marca, somos profesionales capacitados para llevar
          tu proyecto a otro nivel.
        </motion.p>
        <Link href="/contacto" scroll={false} passHref>
          <motion.button variants={fade}>Contacto</motion.button>
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
      <Wave />
    </SLayout>
  );
};

export default AboutSection;
