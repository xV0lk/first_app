import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import clock from '../src/img/clock.svg';
import diaphragm from '../src/img/diaphragm.svg';
import money from '../src/img/money.svg';
import teamwork from '../src/img/teamwork.svg';
import home2 from '../src/img/home2.png';

import { SDescription, SIwrapper, SLayout } from '../styles/styles';
import { useScroll } from './useScroll';
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
              <Image src={clock} alt="clock icon" />
              <h3>Agilidad</h3>
            </div>
            <p>Soluciones oportunas para los desafíos del mercado.</p>
          </SCard>
          <SCard>
            <div className="icon">
              <Image src={diaphragm} alt="diaphragm icon" />
              <h3>Calidad</h3>
            </div>
            <p>
              Desarrollamos proyectos con fotografía y diseño de alta calidad.
            </p>
          </SCard>
          <SCard>
            <div className="icon">
              <Image src={money} alt="money icon" />
              <h3>Costo</h3>
            </div>
            <p>Nos se adecuamos a tus necesidades y presupuesto.</p>
          </SCard>
          <SCard>
            <div className="icon">
              <Image src={teamwork} alt="teamwork icon" />
              <h3>Profesionales</h3>
            </div>
            <p>Comprometidos y dedicamos con tu crecimiento</p>
          </SCard>
        </SCards>
      </SDescription>
      <SIwrapper>
        <div>
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
    padding: 2rem 0rem 4rem 0rem;
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
  }
`;

export default ServicesSection;
