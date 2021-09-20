import React from 'react';
import styled from 'styled-components';
import { SLayout } from '../styles/styles';
import Link from 'next/link';

const FaqSection = () => {
  return (
    <SFaq>
      <h2>
        Preguntas frecuentes <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Cómo inicio?</h4>
        <div className="answer">
          <p>Iniciar es muy fácil.</p>
          <p>
            Cuéntanos acerca de tu proyecto y tus necesidades. Generaremos una
            propuesta de valor acorde a tu presupuesto para ayudarte a alcanzar
            tus metas.
          </p>
        </div>
      </div>
      <div className="faq-line" />
      <div className="question">
        <h4>Métodos de pago</h4>
        <div className="answer">
          <p>Ponemos diversos medios de pago a tu disposición:</p>
          <ul>
            <li>Botón PSE</li>
            <li>Tarjeta de crédito</li>
            <li>Paypal</li>
            <li>Criptomonedas</li>
            <li>Transferencia bancaria</li>
            <li>Nequi o Daviplata</li>
          </ul>
        </div>
      </div>
      <div className="faq-line" />
      <div className="question">
        <h4>Qué productos ofrecemos?</h4>
        <div className="answer">
          <p>
            Más que productos, diseñamos paquetes de soluciones que se ajusten a
            tu necesidad y presupuesto. Te podemos ayudar con:
          </p>
          <ul>
            <li>Gestión de presencia en línea</li>
            <li>Diseño de marca e imagen corporativa</li>
            <li>Desarrollo de páginas Web</li>
            <li>Gestión de redes sociales y contenido</li>
            <li>Fotografía de producto</li>
          </ul>
          <p>
            Si quieres conocer más,{' '}
            <span>
              <Link href="/ContactUs">
                <a>contáctanos</a>
              </Link>
            </span>{' '}
            para contarte sobre nuestra propuesta de valor.
          </p>
        </div>
      </div>
      <div className="faq-line" />
      <div className="question">
        <h4>Cuánto debo pagar?</h4>
        <div className="answer">
          <p>
            Usualmente el costo de nuestros servicios depende de las
            características de tu proyecto y tus necesidades.
          </p>
          <p>
            Generaremos un paquete de soluciones único para ti siempre teniendo
            en cuenta tu presupuesto.
            <span>
              <Link href="/ContactUs">
                <a>Contáctanos</a>
              </Link>
            </span>{' '}
            para conocer más.
          </p>
        </div>
      </div>
      <div className="faq-line" />
    </SFaq>
  );
};

const SFaq = styled(SLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 3rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    span {
      display: inline-block;
      a {
        font-weight: bold;
        color: #23d997;
        font-size: 1.4rem;
        line-height: 150%;
        text-decoration: none;
      }
    }
  }
`;

export default FaqSection;
