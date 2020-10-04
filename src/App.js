import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/authentication/login';
import PageOne from './pages/examplePage';

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
