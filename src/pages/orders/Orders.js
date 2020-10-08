import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <Link to="/newOrder">
      <button type="button">Nowe zamówienie</button>
    </Link>
  );
};

export default Orders;
