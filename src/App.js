import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'template/MainTemplate/MainTemplate';
import Orders from 'pages/orders/Orders';
import Login from './pages/authentication/login';
import PageOne from './pages/examplePage';

function App() {
  return (
    <MainTemplate>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Orders}>
              <Login />
            </Route>
            <Route path="/page-one">
              <PageOne />
            </Route>
          </Switch>
        </div>
      </Router>
    </MainTemplate>
  );
}

export default App;
