import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewOrder from 'pages/orders/newOrder';
import AllOrders from 'pages/orders/allOrders';
import OrderDetails from 'pages/orders/OrderDetails'
import './styles/global.css'
import './styles/app.scss'
import Login from 'pages/authentication/login';
import Registration from 'pages/registration';
import Navside from 'components/Navside';
import Chat from 'pages/chat/Chat'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navside/>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={ AllOrders } />
            <Route path="/login" component={ Login } />
            <Route path="/zamowienie/:id" component={ OrderDetails } />
            <Route path="/nowe-zamowienie" component={ NewOrder } />
            <Route path="/wszystkie-zamowienia" component={ AllOrders } />
            <Route path="/registration" component={ Registration } />
            <Route path="/wiadomosci" component={ Chat } />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
}

export default App;
