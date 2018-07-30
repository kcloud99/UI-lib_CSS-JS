import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  background-color: #68b4ac;
  color: white;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  width: 100vw;
  font-size: 4rem;
  color: #e0722d;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  font-size: 2rem;
`;

const Home = () => {
  return <Wrapper>
      <Header>UI Libraries vs CSS-in-JS modules</Header>
      <Options>
        <h2>UI Libraries</h2>
        <h4>Bootstrap</h4>
        <h4>Material UI</h4>
        <h4>Semantic UI</h4>
      </Options>
      <Options>
        <h2>CSS-in-JS Modules</h2>
        <h4>Styled Components</h4>
        <h4>Styled-JSX</h4>
        <h4>Emotion</h4>
        <h4>Importing Stylesheets</h4>
      </Options>
    </Wrapper>;
}

export default Home;
