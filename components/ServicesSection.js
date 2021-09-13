import React from 'react';
import Image from 'next/image';
import clock from '../src/img/clock.svg';
import diaphragm from '../src/img/diaphragm.svg';
import money from '../src/img/money.svg';
import teamwork from '../src/img/teamwork.svg';
import home2 from '../src/img/home2.png';

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Servicios de <span>alta</span> calidad.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <Image src={clock} alt="clock icon" />
              <h3>Eficientes y ágiles</h3>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <Image src={diaphragm} alt="diaphragm icon" />
              <h3>Fotografía profesional</h3>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <Image src={money} alt="money icon" />
              <h3>Soluciones de acuerdo a tu presupuesto</h3>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <Image src={teamwork} alt="teamwork icon" />
              <h3>
                Equipo de personas dedicado comprometido con tu crecimiento
              </h3>
            </div>
          </div>
          <p>
            Somos la mejor solución para tus necesidades en Marketing y media
            managing
          </p>
        </div>
      </div>
      <div className="image">
        <Image src={home2} alt="Camara" />
      </div>
    </div>
  );
};

export default ServicesSection;
