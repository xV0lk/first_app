import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const NavBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SMobileBtn href="#" className="mobile" onClick={() => setOpen(!open)}>
        <Bars />
      </SMobileBtn>

      <Dropdown status={open} />
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
  z-index: 1;
  transition: all 0.3s;

  &:hover {
    filter: brightness(1.2);
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
