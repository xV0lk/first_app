import styled from 'styled-components';

export const SLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const SDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const SIwrapper = styled.div`
  flex: 1;
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
