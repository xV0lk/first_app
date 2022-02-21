import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Clock, Money, Team, Camera } from '../src/img/svgs';
import home2 from '../src/img/home-new.jpg';
import { useScroll } from './useScroll';

import { SDescription, SIwrapper, SLayout } from '../styles/styles';
import { fadeAnim } from '../src/animation';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <SServices
      animate={controls}
      variants={fadeAnim}
      initial="hidden"
      ref={element}
    >
      <SDescription>
        <h2>
          Servicios de <span>alta</span> calidad.
        </h2>
        <SCards>
          <SCard>
            <div className="icon">
              <span>
                <Clock />
              </span>
              <h3>Agilidad</h3>
            </div>
            <p>Soluciones oportunas para los desafíos del mercado.</p>
          </SCard>
          <SCard>
            <div className="icon">
              <span>
                <Camera />
              </span>
              <h3>Calidad</h3>
            </div>
            <p>
              Desarrollamos proyectos con fotografía y diseño de alta calidad.
            </p>
          </SCard>
          <SCard>
            <div className="icon">
              <span>
                <Money />
              </span>
              <h3>Costo</h3>
            </div>
            <p>Nos se adecuamos a tus necesidades y presupuesto.</p>
          </SCard>
          <SCard>
            <div className="icon">
              <span>
                <Team />
              </span>
              <h3>Compromiso</h3>
            </div>
            <p>Comprometidos y dedicamos con tu crecimiento</p>
          </SCard>
        </SCards>
      </SDescription>
      <SIwrapper>
        <div className="camera-container">
          <Image src={home2} alt="Camara" objectFit="cover" layout="fill" />
        </div>
      </SIwrapper>
    </SServices>
  );
};

const SServices = styled(SLayout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const SCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const SCard = styled.div`
  flex-basis: calc(100% / 2);

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1100px) {
    flex-basis: calc(80% / 2);
    padding: 2rem 3rem;
    .icon {
      justify-content: center;
      min-width: 50px;
    }
    p {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    flex-basis: calc(90% / 2);
  }
  @media (max-width: 500px) {
    flex-basis: calc(100% / 2);
    padding: 2rem 1rem;
  }
  @media (max-width: 386px) {
    flex-basis: calc(100% / 2);
    padding: 2rem 0.5rem;
    font-size: 0.9rem;
  }
`;

export default ServicesSection;
