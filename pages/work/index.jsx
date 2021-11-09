import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../../src/animation';
import AllJobs from '../../src/allJobs';
import SingleJob from '../../components/SingleJob';
import Navbar from '../../components/Nav/Navbar';

const OurWork = () => {
  const jobs = AllJobs();
  return (
    <>
      <Navbar />

      <SWork
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: '#fff' }}
      >
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job} />
        ))}
      </SWork>
    </>
  );
};

const SWork = styled(motion.div)`
  min-height: 80vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
    color: black;
  }

  @media (max-width: 1100px) {
    padding: 5rem;
  }
  @media (max-width: 900px) {
    padding: 2rem;
  }
  @media (max-width: 700px) {
    padding: 1.6rem;
  }
`;

export default OurWork;
