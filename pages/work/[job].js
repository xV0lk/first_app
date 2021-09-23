import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AllJobs } from '../../src/allJobs';

const WorkPage = () => {
  const router = useRouter();
  const jobs = AllJobs();
  const { job } = router.query;

  const actualJob = jobs.filter((stateJob) => stateJob.route === job);
  console.log(actualJob);

  if (actualJob.length < 1) {
    return (
      <SError>
        <h1>
          No se pudo encontrar la página <span> {job} </span>
        </h1>
        <p>
          Este error se debe a que la página a la que intenta acceder, no existe
        </p>
      </SError>
    );
  }

  return (
    <SWork>
      <h1>{job}</h1>
    </SWork>
  );
};

const SError = styled.div`
  min-height: 80vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  h1 {
    color: white;
    span {
      font-weight: bold;
    }
  }
  p {
    color: whitesmoke;
  }
`;

const SWork = styled.div`
  min-height: 85vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h1 {
    color: white;
    span {
      font-weight: bold;
    }
  }
  p {
    color: whitesmoke;
  }
`;

export default WorkPage;
