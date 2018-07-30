import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import List from './List.jsx';

const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

const Subheader = styled.h3`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

class xApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("https://www-integration.leafly.io/api2/strains/lists")
    .then(response => {
      console.log('😇', response);
      this.setState({
      items: response.data
    })})
    .catch(error => console.log('😈', error));
  }

  render() {
    const display = this.state.items.length > 0 ? <List items={ this.state.items } /> : <h3>Loading...</h3>
    return <Fragment>
        <Header>Leafly practice App!</Header>
        <Subheader>Hover on photo to see more!</Subheader>
        <Wrapper>{display}</Wrapper>
      </Fragment>;
  }
}

export default xApp;

// ReactDOM.render(<xApp />, document.getElementById("app"));