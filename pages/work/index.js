import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import athlete from '../../src/img/athlete-small.png';
import theracer from '../../src/img/theracer-small.png';
import goodtimes from '../../src/img/goodtimes-small.png';

const OurWork = () => {
  return (
    <SWork>
      <SMovie>
        <h2>Atleta</h2>
        <div className="line"></div>
        <Link href="/" passHref>
          <div>
            <Image
              src={athlete}
              alt="Boxeador"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Link>
      </SMovie>
      <SMovie>
        <h2>Modelo</h2>
        <div className="line"></div>
        <Link href="/" passHref>
          <div>
            <Image
              src={theracer}
              alt="Modelo"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Link>
      </SMovie>
      <SMovie>
        <h2>Momentos</h2>
        <div className="line"></div>
        <Link href="/" passHref>
          <div>
            <Image
              src={goodtimes}
              alt="Pareja"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Link>
      </SMovie>
    </SWork>
  );
};

const SWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const SMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  div {
    position: relative;
    width: 100%;
    height: 70vh;
  }
`;

export default OurWork;
