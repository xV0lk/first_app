import styled from 'styled-components';

const Award = ({ award }) => (
  <SAward>
    <h3>{award.title}</h3>
    <div className="line" />
    <p>{award.description}</p>
  </SAward>
);

const SAward = styled.div`
  padding: 5rem;
  flex-basis: calc(100% / 3);
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }

  @media (max-width: 1100px) {
    flex-basis: calc(90% / 3);
    padding: 5rem 3rem;
  }
  @media (max-width: 900px) {
    padding: 5rem 0;
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 700px) {
    padding: 5rem 0;
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export default Award;
