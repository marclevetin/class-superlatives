import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Superlatives from './pages/Superlatives';
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Superlatives} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
