import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dropAnim } from '../../src/animation';
import NavItem from './NavItem';
import useClickOutside from '../useClickOutside';

const NavBtn = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setOpen(false));

  return (
    <>
      <SMobileBtn className="mobile" onClick={() => setOpen(!open)}>
        <Bars />
      </SMobileBtn>

      <SDrop
        variants={dropAnim}
        initial="hidden"
        animate={open ? 'show' : 'exit'}
        exit="exit"
        ref={ref}
      >
        <ul>
          <NavItem target="" name="Qué hacemos" />
          <NavItem target="work" name="Nuestros trabajos" />
          <NavItem target="contacto" name="Contáctanos" />
        </ul>
      </SDrop>
    </>
  );
};

const SMobileBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5vh;
  height: 3.5vh;
  background-color: #484a4d;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;

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
      .a-link {
        margin-right: 0;
        font-size: 1.7rem;
      }
    }
  }
`;

export default NavBtn;

const Bars = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="2.5vh"
    height="2.5vh"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
