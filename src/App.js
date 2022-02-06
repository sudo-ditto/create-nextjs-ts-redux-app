import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Title>NextJS, Typescript, SASS, Redux Toolkit, Jest, React Testing Library, Prettier Boilerplate Generator</Title>
    </Container>
  );
};

export default App;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #27277e;
  color: white;
`;
