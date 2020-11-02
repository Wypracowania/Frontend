import React, { useEffect, useState } from 'react';
import { FETCH_ORDERS_URL } from 'globalVariables';
import { NavLink } from 'react-router-dom';
import AuthenticationWrapper from '../authentication/Authentication';
import "../../styles/allOrders.scss";

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
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <AuthenticationWrapper>
      <div className="allOrders">
        <div>
        <h2 className="allOrders__title">Moje zamówienia</h2>
        <div className="allOrders__newOrderLink">
          <NavLink to="/noweZamowienie" className="navside__link">
          <span>+</span>
          <span>Nowe zamówienie</span>
          </NavLink>
        </div>
        </div>
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
