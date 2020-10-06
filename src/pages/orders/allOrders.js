import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FETCH_ORDERS_URL } from 'globalVariables';

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 100px;

//   & > * {
//     width: 300px;
//     margin-top: 40px;
//   }
// `;

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

  return orders.map(({ topic, category, document }) => (
    <span>
      {topic}, {category}, {document} <br />
    </span>
  ));
};

export default AllOrders;
