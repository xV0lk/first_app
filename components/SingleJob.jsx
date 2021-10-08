import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { fadeAnim, lineAnim } from '../src/animation';
import { useScroll } from './useScroll';

const Component = React.forwardRef(({ job }, ref) => {
  const [element, controls] = useScroll();
  return (
    <div ref={ref}>
      <SJob
        animate={controls}
        variants={fadeAnim}
        initial="hidden"
        ref={element}
        key={job.id}
      >
        <motion.h2 variants={fadeAnim}>{job.title}</motion.h2>
        <motion.div className="line" variants={lineAnim} />
        <Link
          href="/work/[job]"
          as={`/work/${job.route}`}
          scroll={false}
          passHref
        >
          <SHide>
            <motion.div className="img-container">
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
    </div>
  );
});

const SJob = styled(motion.div)`
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

const SingleJob = motion(Component);
export default SingleJob;
