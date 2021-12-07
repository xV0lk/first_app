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
  min-height: 7vh;
  //padding: 0 10rem;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-evenly;
    width: 40vw;
    align-items: center;
  }
  div:not(.container) {
    height: 2rem;
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
    min-height: 8vh;
    .container {
      width: 60vw;
    }
    div:not(.container) {
      height: 1.8rem;
    }
  }
  @media (max-width: 700px) {
    .container {
      width: 65vw;
    }
  }
  @media (max-width: 500px) {
    .container {
      width: 70vw;
    }
  }
`;

export default Footer;
