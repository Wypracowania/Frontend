import React from "react";


const OrderDetailsHeader = (props) =>{
    return(
        <div>
            {console.log(props.orderData)}
            <div>
                <h2>Zamówienie {props.orderData.id} </h2>
                <button>button</button>
            </div>
            <div>
                <h3>{props.orderData.document}</h3>
                <p>Dostępne oferty</p>
                <p>{props.orderData.deadline}</p>
            </div>
        </div>
    )
}

export default OrderDetailsHeader;