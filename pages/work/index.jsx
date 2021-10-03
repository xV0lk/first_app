import styled from "styled-components";
import { AllJobs } from "../../src/allJobs";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../src/animation.js";
import SingleJob from "../../components/SingleJob";

const OurWork = () => {
  const jobs = AllJobs();
  return (
    <SWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
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

// Frame Animation
const SFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export default OurWork;
