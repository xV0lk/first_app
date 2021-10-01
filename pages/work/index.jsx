import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { AllJobs } from "../../src/allJobs";
// animations
import { motion } from "framer-motion";
import {
  fade,
  lineAnim,
  pageAnimation,
  photoAnim,
  sliderAnim,
  sliderContainer,
} from "../../src/animation.js";

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
      {/* Frame animations*/}
      {/*--------------------------------------------*/}
      <motion.div variants={sliderContainer}>
        <SFrame1 variants={sliderAnim} />
        <SFrame2 variants={sliderAnim} />
        <SFrame3 variants={sliderAnim} />
        <SFrame4 variants={sliderAnim} />
      </motion.div>
      {/*--------------------------------------------*/}
      {jobs.map((job) => (
        <SJob key={job.id}>
          <motion.h2 variants={fade}>{job.title}</motion.h2>
          <motion.div className="line" variants={lineAnim} />
          <Link
            href="/work/[job]"
            as={`/work/${job.route}`}
            scroll={false}
            passHref
          >
            <SHide>
              <motion.div className="img-container" variants={photoAnim}>
                <Image
                  src={job.mainImg}
                  alt={job.title}
                  objectFit="cover"
                  layout="fill"
                />
              </motion.div>
            </SHide>
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
    padding: 1rem 0;
    color: black;
  }
`;

const SJob = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  .img-container {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 70vh;
  }
`;

const SHide = styled.div`
  overflow: hidden;
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

const SFrame2 = styled(SFrame1)`
  background: #ff8efb;
`;

const SFrame3 = styled(SFrame1)`
  background: #8ed2ff;
`;

const SFrame4 = styled(SFrame1)`
  background: #8effa0;
`;
export default OurWork;
