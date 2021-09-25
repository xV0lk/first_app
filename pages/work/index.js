import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { AllJobs } from '../../src/allJobs';
// animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../../src/animation.js';

const OurWork = () => {
  const jobs = AllJobs();
  return (
    <SWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      {jobs.map((job) => (
        <SJob key={job.id}>
          <h2>{job.title}</h2>
          <div className="line"></div>
          <Link
            href="/work/[job]"
            as={`/work/${job.route}`}
            scroll={false}
            passHref
          >
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

const SWork = styled(motion.div)`
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
  .img-container {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 70vh;
  }
`;

export default OurWork;
