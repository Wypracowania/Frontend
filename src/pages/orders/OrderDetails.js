import React, { useEffect, useState } from 'react';
import AuthenticationWrapper from '../authentication/Authentication';
import Navside from 'components/Navside';
import { useParams } from 'react-router-dom'
import { ORDER_DETAIL_URL } from 'globalVariables';

const OrderDetails = () => {
    // Param from url
    let { id } = useParams();
    const [order, getOrderDetail] = useState(null)
    
    useEffect(()=>{
        const url = ORDER_DETAIL_URL + `${id}/`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            getOrderDetail(res)
        })
        .catch(err => 
            console.log(err)
        )}, [])
  return (
    <AuthenticationWrapper>
      <Navside />
        <div>Order Detail</div>
        { order ? 
        <div>Temat: { order.topic } Deadline: { order.deadline }</div>
         : null}
    </AuthenticationWrapper>
  );
};

export default OrderDetails;
