import React, { useEffect, useState } from 'react';
import { ADD_ORDER_URL } from 'globalVariables';
import { getUsername } from 'authentication';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "../../styles/newOrder.scss";
import Steps from './steps';
import FirstStep from './firstStep';
import SecondStep from './secondStep';


// Przykład użycia redux dla jednego komponentu, do drugiego musisz nieco pozmieniać nazwy ;)

const firstStepDataUpload = ( data ) => ({ 
  type: "FIRST_STEP_SUCCESS",
  // Tutaj przekazujesz obiekt danych z zamówienia (etapu 1)
  payload: data
  // 
});




const NewOrder = () => {
  const firstStepData = useSelector(
    state => state.firstStep
  );

// Aby zmienić stan globalny, użyj dispatch(firstStepDataUpload)
const dispatch = useDispatch()
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

    console.log(orderData)
    if(isSubmited === false){
      return;
    }

    // ------------------------ PRZYKŁAD UŻYCIA ---------------------------
    // Zmieniamy stan
    dispatch(firstStepDataUpload(orderData)) 
    // Odczytujemy zmiany
    console.log(firstStepData)
    // ------------------------ PRZYKŁAD UŻYCIA ---------------------------


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
      <FirstStep />
    </form>
    {/* Sledzenie zamówienia po jego utworzeniu. Etap licytacji */}
    { isCreated ? <Redirect to={`/zamowienie/${id}`} /> : null } 
    </div>
  </div>
);
};

export default NewOrder;
