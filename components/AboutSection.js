import React from 'react';
import Image from 'next/image';
import home1 from '../src/img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
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
          Cuéntanos tus ideas de fotografía y video, somos profesionales
          capacitados para realizar tu proyecto
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <Image src={home1} alt="Fotógrafo" />
      </div>
    </div>
  );
};

export default AboutSection;
