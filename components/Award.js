import styled from 'styled-components';

const Award = ({ award }) => {
  return (
    <SAward>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </SAward>
  );
};

const SAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

export default Award;
