import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';
import AllJobs from '../../src/allJobs';
import Award from '../../components/Award';

// animations
import { pageAnimation } from '../../src/animation';
import Navbar from '../../components/Nav/Navbar';

const WorkPage = () => {
  const router = useRouter();
  const jobs = AllJobs();
  const { job } = router.query;
  const [actualJob] = jobs.filter((stateJob) => stateJob.route === job);
  // TODO: Connect to sanity or any other cms
  if (actualJob) {
    return (
      <>
        <Navbar />
        <SWork
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <SHeadline>
            <h2>{actualJob.title}</h2>
            <div className="img-container">
              <Image
                src={actualJob.mainImg}
                alt={actualJob.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </SHeadline>
          <SAwards>
            {actualJob.awards.map((award) => (
              <Award award={award} key={award.id} />
            ))}
          </SAwards>
          <SSImage>
            <div className="img-container">
              <Image
                src={actualJob.secondaryImg}
                alt={actualJob.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </SSImage>
        </SWork>
      </>
    );
  }
  return null;
};

const SWork = styled(motion.div)`
  color: white;
`;

const SHeadline = styled.div`
  position: relative;
  h2 {
    //  position: absolute;
    //  top: 7%;
    //  left: 50%;
    //  transform: translate(-50%, -10%);
    text-align: center;
    padding: 4rem 0;
  }
  .img-container {
    position: relative;
    width: 100%;
    height: 70vh;
  }
`;

const SAwards = styled.div`
  min-height: 55vh;
  display: flex;
  margin: 0 10rem;
  align-items: center;
  justify-content: space-around;
  color: white;
  @media (max-width: 1100px) {
    margin: 0 5rem;
  }
  @media (max-width: 900px) {
    margin: 0 2.5rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 3rem 15rem;
  }
  @media (max-width: 500px) {
    margin: 5rem 10rem;
  }
  @media (max-width: 400px) {
    margin: 5rem 6rem;
  }
`;

const SSImage = styled.div`
  min-height: 50%;
  .img-container {
    position: relative;
    width: 100%;
    height: 80vh;
    @media (max-width: 1100px) {
      height: 65vh;
    }
    @media (max-width: 900px) {
      height: 60vh;
    }
    @media (max-width: 600px) {
      height: 55vh;
    }
    @media (max-width: 500px) {
      height: 50vh;
    }
  }
`;

export default WorkPage;
