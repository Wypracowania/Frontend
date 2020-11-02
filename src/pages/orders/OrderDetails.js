import React, { useEffect, useState } from 'react';
import AuthenticationWrapper from '../authentication/Authentication';
import { useParams } from 'react-router-dom'
import { ORDER_DETAIL_URL } from 'globalVariables';
import AuthenticationWrapper from '../authentication/Authentication.js'

const OrderDetails = () => {
    // Param from url
    const { id } = useParams();
    const [order, getOrderDetail] = useState(null)
    
    useEffect(()=>{
        const url = `${ORDER_DETAIL_URL  }${id}/`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            getOrderDetail(res)
        })
        .catch(err => 
            console.log(err)
        )}, [])
  return (
    <AuthenticationWrapper>
        <div>Order Detail</div>
        { order ? 
        <div>Temat: { order.topic } Deadline: { order.deadline }</div>
         : null}
    </AuthenticationWrapper>
  );
};

export default OrderDetails;
