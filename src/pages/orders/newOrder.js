import React, { useEffect, useState } from 'react';
import { ADD_ORDER_URL } from 'globalVariables';
import { getUsername } from 'authentication';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Steps from './steps';
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import "../../styles/newOrder.scss";



const NewOrder = () => {
  const firstStepData = useSelector(
    state => state.firstStep
  );
  const secondStepData = useSelector(
    state => state.secondStep
  );
  

  let data = {}
  Object.assign(data, firstStepData, secondStepData)
  // Username for relation in database
  const initialOrder = {
    username: getUsername()
  }

  const [orderData, changeOrderData] = useState(initialOrder);
  const [isCreated, created] = useState(false);
  const [isSubmited, changeSubmit] = useState(false);
  // returned in response when created
  const [id, setID] = useState(null);


  
  useEffect(() =>{
    if(isSubmited === false){
      return;
    }

    console.log(orderData)

    fetch(ADD_ORDER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // if success, set id to parse it to url
      setID(response.id)
      created(true)

    })
    .catch((err) => {
      console.log(err);
    });
  
  changeSubmit(false);
  }, [isSubmited])

  return (
    <div className="newOrder">
    <Steps />
    <div>
    <form onSubmit={ e => {e.preventDefault(); changeSubmit(true)} } >
      <FirstStep/>
      <SecondStep />
      <button onClick={() =>{changeOrderData({...orderData, ...data})}}>COXD</button>
    </form>
    {/* Sledzenie zamówienia po jego utworzeniu. Etap licytacji */}
    { isCreated ? <Redirect to={`/zamowienie/${id}`} /> : null } 
    </div>
  </div>
);
};

export default NewOrder;
