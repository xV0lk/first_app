import styled from 'styled-components';

const Footer = () => (
  <SFooter>
    <div>
      <a href="#">FB</a>
    </div>
    <div>
      <a href="#">TW</a>
    </div>
    <div>
      <a href="#">IS</a>
    </div>
  </SFooter>
);

const SFooter = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    padding: 0 5rem;
  }
`;

export default Footer;
