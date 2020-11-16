import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ORDER_DETAIL_URL } from 'globalVariables';
import { getUsername } from 'authentication';
import OrderDetailsHeader from "./orderDetailsHeader";
import AuthenticationWrapper from '../authentication/Authentication';

const OrderDetails = () => {
    // Param from url
    const { id } = useParams();
    const [order, getOrderDetail] = useState(null)
    
    useEffect(()=>{
        const url = `${ORDER_DETAIL_URL}/${id}/`
        fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(res => {
            getOrderDetail(res)
        })
        .catch(err => 
            console.log(err)
        )}, [])
  return (
    <AuthenticationWrapper>
        <div>
            <OrderDetailsHeader orderData={order} />
        </div> 
        
    </AuthenticationWrapper>
  );
};

export default OrderDetails;
