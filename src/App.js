import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'template/MainTemplate/MainTemplate';
import Navside from 'components/navside/Navside';
import Orders from 'pages/orders/Orders';
import Login from './pages/authentication/login';
import PageOne from './pages/examplePage';
import MainPageTemplate from 'template/mainPageTemplate.js/MainPageTemplate';
import NewOrder from 'pages/orders/newOrder';

function App() {
  return (
    <MainTemplate>
      <Navside />
      <BrowserRouter>
        <MainPageTemplate>
          <Switch>
            <Route exact path="/" component={Orders} />
            <Route path="/page-one" component={PageOne} />
            <Route path="/newOrder" component={NewOrder} />
          </Switch>
        </MainPageTemplate>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default App;
