import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './Home.jsx';
import Bootstrap from './ui_libs/bootstrap/Index.jsx';
import Material from './ui_libs/material/Index.jsx';
import Semantic from './ui_libs/semantic/Index.jsx';
import Styled from './css_in_js/styled/Index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get("https://www-integration.leafly.io/api2/strains/lists")
      .then(response => {
        console.log("😇", response);
        this.setState({
          items: response.data
        });
      })
      .catch(error => console.log("😈", error));
  }

  render() {
    return <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bootstrap" component={() => <Bootstrap items={this.state.items} />} />
          <Route path="/material" component={() => <Material items={this.state.items} />} />
          <Route path="/semantic" component={() => <Semantic items={this.state.items} />} />
          <Route path="/styled" component={() => <Styled items={this.state.items} />} />
        </Switch>
      </Fragment>;
  }
}

export default App;

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);