import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory, Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';

const App = () => {
  return(
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);