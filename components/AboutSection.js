import React from 'react';
import Image from 'next/image';
import home1 from '../src/img/home1.png';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <SAbout>
      <SDescription>
        <div className="title">
          <div className="hide">
            <h2>Hacemos</h2>
          </div>
          <div className="hide">
            <h2>
              tus <span>sueños</span>
            </h2>
          </div>
          <div className="hide">
            <h2>realidad.</h2>
          </div>
        </div>
        <p>
          Cuéntanos sobre tu marca, somos profesionales capacitados para llevar
          tu proyecto a otro nivel.
        </p>
        <button>Contacto</button>
      </SDescription>
      <SImage>
        <Image src={home1} alt="Fotógrafo" />
      </SImage>
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

const SImage = styled.div`
  flex: 1;
`;

export default AboutSection;
