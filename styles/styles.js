import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SLayout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1100px) {
    display: block;
    padding: 5rem 5rem;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 900px) {
    padding: 2rem 2rem;
    p {
      padding: 3rem 4rem;
    }
  }
  @media (max-width: 700px) {
    padding: 2rem 0rem;
  }
`;

export const SDescription = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1100px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

export const SIwrapper = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;

  div {
    position: relative;
    width: 100%;
    height: 80vh;
  }
`;

export const SHide = styled.div`
  overflow: hidden;
`;
