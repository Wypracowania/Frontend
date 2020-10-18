import React, { useEffect, useState } from 'react';
import { FETCH_ORDERS_URL } from 'globalVariables';
import { Link, Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import AuthenticationWrapper from '../authentication/Authentication';
import Navside from 'components/Navside';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(FETCH_ORDERS_URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setOrders(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <AuthenticationWrapper>
      <Navside />
      <div>ALL ORDERS</div>
    </AuthenticationWrapper>
  );
};

export default AllOrders;
