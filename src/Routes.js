import React from 'react';
import React, { Route, Switch, BrowserRouter as Router } from 'react-router-dom';



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Feed}></Route>
          <Route exact path="/HelloPage" component={HelloPage}></Route>
          <Route exact path="/List" component={List}></Route>
          <Route exact path="/Details" component={Details}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;