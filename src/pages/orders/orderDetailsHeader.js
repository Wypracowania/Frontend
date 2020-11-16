import React, { useEffect } from "react";
import "../../styles/components/orderDetailsHeader.scss"


const OrderDetailsHeader = (props) =>{

    useEffect(() =>{
        const deadline = document.querySelector(".orderDetailsHeader__details-deadline");
        const timeLeft = document.querySelector(".orderDetailsHeader__details-timeLeft");
        const deadlineDate = new Date(deadline.textContent);
        const today = new Date();
        let daysLeft = (today.getDate() - deadlineDate.getDate());
        let monthsLeft = (today.getMonth() + 1 ) - (deadlineDate.getMonth() + 1);
        if(daysLeft < 0){
            daysLeft *= (-1);
        }
        if(monthsLeft < 1){
            timeLeft.innerHTML =  `Do końca zostało ${daysLeft} dni`;
        }
        else{
            timeLeft.innerHTML = `Do końca zostało ${daysLeft} dni oraz ${monthsLeft} miesięcy.`
        }
        console.log(daysLeft)
    })

    return(
        <div className="orderDetailsHeader">
            {console.log(props.orderData)}
            <div className="orderDetailsHeader__title">
                <h2 className="orderDetailsHeader__title-header">Zamówienie {props.orderData.id} </h2>
                <button className="button details-button">Szczegóły zamówienia</button>
            </div>
            <div className="orderDetailsHeader__details">
                <div className="orderDetailsHeader__details-box">
                    <h3 className="orderDetailsHeader__details-document">{props.orderData.document}</h3>
                    <p>Dostępne oferty</p>
                    <p className="orderDetailsHeader__details-deadline">{props.orderData.deadline}</p>
                    <p className="orderDetailsHeader__details-timeLeft"></p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsHeader;