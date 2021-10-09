import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';
import AllJobs from '../../src/allJobs';
import Award from '../../components/Award';

// animations
import { pageAnimation } from '../../src/animation';
import Navbar from '../../components/Navbar';

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
  min-height: 85vh;
  padding-top: 19vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  .img-container {
    position: relative;
    width: 100%;
    height: 70vh;
  }
`;

const SAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

const SSImage = styled.div`
  min-height: 50%;
  .img-container {
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;

export default WorkPage;
