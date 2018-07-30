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
  font-size: 8rem;
  color: #e0722d;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  font-size: 30em;
`;

const Links = styled.h4`
  font-size: 4rem;
`;

const Home = () => {
  return <Wrapper>
      <Header>UI Libraries vs CSS-in-JS modules</Header>
      <Options>
        <h2 style={{ fontSize: '6rem' }}>UI Libraries</h2>
        <Link to="/bootstrap"><Links>Bootstrap</Links></Link>
        <Link to="/material"><Links>Material UI</Links></Link>
        <Link to="/semantic"><Links>Semantic UI</Links></Link>
      </Options>
      <Options>
        <h2 style={{fontSize: '6rem'}}>CSS-in-JS Modules</h2>
        <Link to="/styled"><Links>Styled Components</Links></Link>
        <Link to="/styled-jsx"><Links>Styled-JSX</Links></Link>
        <Link to="/emotion"><Links>Emotion</Links></Link>
        <Link to="/import"><Links>Importing Stylesheets</Links></Link>
      </Options>
    </Wrapper>;
}

export default Home;
