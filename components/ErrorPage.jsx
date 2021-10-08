import styled from 'styled-components';

const ErrorPage = ({ path }) => (
  <SError>
    <h1>404</h1>
    <div className="line" />
    <h2>
      No se pudo encontrar: <span>{path}</span>{' '}
    </h2>
    <p>Este error se debe a que la página solicitada, no existe</p>
  </SError>
);

const SError = styled.div`
  min-height: 80vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 7rem;
    font-weight: lighter;
    color: white;
  }
  .line {
    width: 13rem;
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 5rem;
  }
  h2 {
    font-size: 2.5rem;
    span {
      font-weight: bold;
    }
  }
  p {
    color: whitesmoke;
  }
`;

export default ErrorPage;
