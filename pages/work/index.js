import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { AllJobs } from '../../src/allJobs';

const OurWork = () => {
  const jobs = AllJobs();
  return (
    <SWork>
      {jobs.map((job) => (
        <SJob key={job.id}>
          <h2>{job.title}</h2>
          <div className="line"></div>
          <Link href="/work/[job]" as={`/work/${job.route}`} passHref>
            <div className="img-container">
              <Image
                src={job.mainImg}
                alt={job.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </Link>
        </SJob>
      ))}
    </SWork>
  );
};

const SWork = styled.div`
  min-height: 80vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const SJob = styled.div`
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
  .img-container {
    cursor: pointer;
  }
`;

export default OurWork;
