import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';
import { SLayout, SDescription, SHide, SIwrapper } from '../styles/styles';

const AboutSection = () => {
  return (
    <SLayout>
      <SDescription>
        <div className="title">
          <SHide>
            <h2>Hacemos</h2>
          </SHide>
          <SHide>
            <h2>
              tus <span>sueños</span>
            </h2>
          </SHide>
          <SHide>
            <h2>realidad.</h2>
          </SHide>
        </div>
        <p>
          Cuéntanos sobre tu marca, somos profesionales capacitados para llevar
          tu proyecto a otro nivel.
        </p>
        <Link href="/contacto" passHref>
          <button>Contacto</button>
        </Link>
      </SDescription>
      <SIwrapper>
        <div>
          <Image
            src="/home1.png"
            alt="Fotógrafo"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </SIwrapper>
    </SLayout>
  );
};

export default AboutSection;
