import React, { useEffect, useState } from 'react';
import { FETCH_ORDERS_URL } from 'globalVariables';
import { Link, Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Navside from 'components/Navside';
import AuthenticationWrapper from '../authentication/Authentication';
import { getUsername } from '../../authentication'

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const username = getUsername()
    const url = `${FETCH_ORDERS_URL}` + `${username}`

    fetch(url, {})
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        setOrders(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <AuthenticationWrapper>
      <Navside />
      <div>ALL ORDERS</div>
    </AuthenticationWrapper>
  );
};

export default AllOrders;
