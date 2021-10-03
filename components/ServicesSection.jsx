import React from "react";
import Image from "next/image";
import clock from "../src/img/clock.svg";
import diaphragm from "../src/img/diaphragm.svg";
import money from "../src/img/money.svg";
import teamwork from "../src/img/teamwork.svg";
import home2 from "../src/img/home2.png";

import styled from "styled-components";
import { SDescription, SIwrapper, SLayout } from "../styles/styles";
import { useScroll } from "./useScroll";
import { fadeAnim } from "../src/animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <SServices
      animate={controls}
      variants={fadeAnim}
      initial={"hidden"}
      ref={element}
    >
      <SDescription>
        <h2>
          Servicios de <span>alta</span> calidad.
        </h2>
        <SCards>
          <Scard>
            <div className="icon">
              <Image src={clock} alt="clock icon" />
              <h3>Agilidad</h3>
            </div>
            <p>Generamos soluciones oportunas para los desafíos del mercado.</p>
          </Scard>
          <Scard>
            <div className="icon">
              <Image src={diaphragm} alt="diaphragm icon" />
              <h3>Calidad</h3>
            </div>
            <p>
              Desarrollamos proyectos con fotografía y diseño de alta calidad.
            </p>
          </Scard>
          <Scard>
            <div className="icon">
              <Image src={money} alt="money icon" />
              <h3>Costo</h3>
            </div>
            <p>Nuestra propuesta se adecua a tus necesidades y presupuesto.</p>
          </Scard>
          <Scard>
            <div className="icon">
              <Image src={teamwork} alt="teamwork icon" />
              <h3>Profesionales</h3>
            </div>
            <p>Nos comprometemos y dedicamos a tu crecimiento</p>
          </Scard>
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
`;

const Scard = styled.div`
  flex-basis: 20rem;

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
`;

export default ServicesSection;
