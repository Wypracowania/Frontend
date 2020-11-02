import React, { useEffect, useState } from 'react';
import { FETCH_ORDERS_URL } from 'globalVariables';
import { Link, Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import AuthenticationWrapper from '../authentication/Authentication';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(FETCH_ORDERS_URL,{
      Allow: 'OPTIONS',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setOrders(response);
      })
  }, [])


  return (
    <AuthenticationWrapper>
      <div>
{console.log(orders)}
      {orders.map(order => (
        <div>
        <p>{order.topic}</p>
        <p>{order.deadline}</p>
        </div>
      ))}
      </div>
    </AuthenticationWrapper>
  );
};

export default AllOrders;
