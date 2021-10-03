import styled from "styled-components";
import { motion } from "framer-motion";

export const SLayout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const SDescription = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
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
