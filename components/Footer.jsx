import styled from 'styled-components';
import { FB, TW, IS } from '../src/img/svgs';

const Footer = () => (
  <SFooter>
    <div className="container">
      <div>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FB />
        </a>
      </div>
      <div className="line" />
      <div>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <TW />
        </a>
      </div>
      <div className="line" />
      <div>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <IS />
        </a>
      </div>
    </div>
  </SFooter>
);

const SFooter = styled.footer`
  min-height: 10vh;
  padding: 0 10rem;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-evenly;
    width: 30vw;
    align-items: center;
  }
  div:not(.container) {
    height: 2.5rem;
  }

  .line {
    background: #cccccc;
    width: 0.25rem;
    height: 100%;
  }

  a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;

    svg {
      height: 100%;
    }
  }

  @media (max-width: 1100px) {
    padding: 0 5rem;
  }
`;

export default Footer;
