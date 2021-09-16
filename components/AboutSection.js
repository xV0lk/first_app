import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

const AboutSection = () => {
  return (
    <SAbout>
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
        <button>Contacto</button>
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
    </SAbout>
  );
};

// Styled Components
const SAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const SDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const SIwrapper = styled.div`
  flex: 1;
  overflow: hidden;
  div {
    position: relative;
    width: 100%;
    height: 80vh;
  }
`;

const SHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
