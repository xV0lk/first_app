import React from 'react';

const FaqSection = () => {
  return (
    <div className="faq">
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
            Si quieres conocer más, contáctanos para contarte sobre nuestra
            propuesta de valor.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Cuánto debo pagar?</h4>
        <div className="answer">
          <p>
            Usualmente el costo de nuestros servicios depende de las
            características de tu proyecto y tus necesidades.
          </p>
          <p>
            {' '}
            Generaremos un paquete de soluciones único para ti siempre teniendo
            en cuenta tu presupuesto. <span>Contáctnos para conocer más</span>
          </p>
          {/* TODO: Agregar link que lleve a la pagina de contacto */}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
