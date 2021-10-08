import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <SNavbar>
      <h1>
        <Link href="/" scroll={false} passHref>
          <motion.a id="logo" whileHover={{ color: '#23d997' }}>
            Content
          </motion.a>
        </Link>
      </h1>
      <ul>
        <NavItem target="" name="Qué hacemos" />
        <NavItem target="work" name="Nuestros trabajos" />
        <NavItem target="contacto" name="Contáctanos" />
      </ul>
    </SNavbar>
  );
};
function NavItem({ target, name }) {
  const { pathname } = useRouter();
  console.log(target);
  console.log(name);
  return (
    <li>
      <Link href={`/${target}`} scroll={false}>
        <a className={pathname === `/${target}` ? 'active' : ''}>{name}</a>
      </Link>
    </li>
  );
}

const SNavbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  /* padding: 1rem 10rem; */
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
    margin-right: 6rem;
    cursor: pointer;
    padding-bottom: 0.4rem;
  }

  .active {
    border-bottom: 3px solid #23d997;
  }

  ul {
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    list-style: none;

    a {
      border-bottom: 3px solid transparent;
      transition: all 0.5s ease;

      &:hover {
        border-bottom: 3px solid #23d997;
      }
    }
  }

  #logo {
    font-size: 1.7rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`;

export default Navbar;
