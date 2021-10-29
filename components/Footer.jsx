import styled from 'styled-components';

const Footer = () => (
  <SFooter>
    <div>FB</div>
    <div>TW</div>
    <div>IS</div>
  </SFooter>
);

const SFooter = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background: #282828;
  z-index: 10;
`;

export default Footer;
