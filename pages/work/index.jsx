import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../src/animation';
import AllJobs from '../../src/allJobs';
import SingleJob from '../../components/SingleJob';

const OurWork = () => {
  const jobs = AllJobs();
  return (
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
  );
};

const SWork = styled(motion.div)`
  min-height: 80vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
    color: black;
  }
`;

export default OurWork;
