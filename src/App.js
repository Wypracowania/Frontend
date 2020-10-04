import React, { useState } from 'react';
import Login from './pages/authentication/login.js'
import PageOne from './pages/examplePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/page-one">
            <PageOne />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
