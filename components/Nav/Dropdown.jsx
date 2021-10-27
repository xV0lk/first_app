import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import NavItem from './NavItem';
import { dropAnim } from '../../src/animation';

function Dropdown({ status }) {
  return (
    <SDrop
      variants={dropAnim}
      initial="hidden"
      animate={status ? 'show' : 'exit'}
      exit="exit"
    >
      <ul>
        <NavItem className="menu-item" target="" name="Qué hacemos" />
        <NavItem className="menu-item" target="work" name="Nuestros trabajos" />
        <NavItem className="menu-item" target="contacto" name="Contáctanos" />
      </ul>
    </SDrop>
  );
}

const SDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282828;
  padding: 1rem;
  overflow: hidden;
  width: 100vw;
  .close-btn {
    color: #484a4d;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      height: 100px;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      transition: background 1s;
      .a-link {
        margin-right: 0;
        font-size: 1.7rem;
      }
    }
    li:hover {
      background-color: #575a5dff;
    }
  }
`;

export default Dropdown;
