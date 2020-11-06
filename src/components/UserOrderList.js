import React from 'react';
import NewOrderButton from "./NewOrderBtn"

const userOrderList = (props) => {

    return (
            <div className="ol-container">
                <div className="ol-wrapper">
                    <p>Brak zamówień</p>
                    <p className="message">{props.listProps.message}</p>
                    <NewOrderButton />
                </div>
                {/* {props.orders.map(order => (
                    <div key={order.id}>
                    <p>{order.topic}</p>
                    <p>{order.deadline}</p>
                    </div>
                ))} */}
            </div>
    )
}

export default userOrderList