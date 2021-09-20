import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <SNavbar>
      <h1>
        <Link href="/">
          <a id="logo">Capture</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/">
            <a>1. Qué hacemos</a>
          </Link>
        </li>
        <li>
          <Link href="/OurWork">
            <a>2. Nuestros trabajos</a>
          </Link>
        </li>
        <li>
          <Link href="/ContactUs">
            <a>3. Contáctanos</a>
          </Link>
        </li>
      </ul>
    </SNavbar>
  );
};

const SNavbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  /* padding: 1rem 10rem; */
  background: #282828;
  a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.7rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Navbar;
