import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getUsername } from 'authentication';
import { ADD_ORDER_URL } from 'globalVariables';
import { useDispatch } from 'react-redux';
import "../../styles/components/summary.scss";


const Summary = (props) => {
    
    const dispatch = useDispatch();
    const [orderData, changeOrderData] = useState({ username: getUsername()});
    const [isSubmited, changeSubmit] = useState(false);
    const [isCreated, created] = useState(false);
    // returned in response when created
    const [id, setID] = useState(null);
    

    // we need to reset state of each component
    const firstStepDataUpload = ( data ) => ({ 
        type: "FIRST_STEP_SUCCESS",
        payload: data
      });

    const secondStepDataUpload = ( data ) => ({ 
        type: "SECOND_STEP_SUCCESS",
        payload: data
    });



    // we need to change visibility of each component
    const firstStepVisible = (bool) => ({
        type: "FIRST_STEP_VISIBLE",
        payload: bool
      });

    const secondStepVisible = (bool) => ({
        type: "SECOND_STEP_VISIBLE",
        payload: bool
      });

    const summaryVisible = (bool) => ({
        type: 'SUMMARY_VISIBLE',
        payload: bool
    })

    // Here the merged state of the two components will be stored
    let data = {};

    // merge two states into one object
    Object.assign(data, props.firstStepData, props.secondStepData);
    useEffect(() =>{
        if(isSubmited === false){
          return;
        }
        
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
          setID(response.id);
          created(true);
          // if request is created we are reseting the state
          dispatch(firstStepDataUpload(""))
          dispatch(secondStepDataUpload(""));
          dispatch(summaryVisible(false));
          dispatch(secondStepVisible(false));
          dispatch(firstStepVisible(true));
        })
        .catch((err) => {
          const error = document.querySelector('.error-text');
          error.innerHTML= "Wystąpił błąd podczas wysyłania zamówienia";
        });
      
      changeSubmit(false);
      }, [isSubmited])

    return(
        <div className="summary-box">
            <div className="summary">
                <h2>Potwierdź zamówienie</h2>
                <h3>Potwierdź szczegóły zamówienia:</h3>
                <p>Tytuł: <br /><span className="summary-data">{props.secondStepData.topic}</span></p>
                <p>Deadline: <br /><span className="summary-data">{props.firstStepData.deadline}</span></p>
                <p>Strony: <br /><span className="summary-data">{props.firstStepData.pages}</span></p>
                <div className="summary-buttons">
                    <button type="button" className="button" onClick={() =>{dispatch(summaryVisible(false))}}>Nie, chcę wprowadzić zmiany</button>
                    <button type="submit" className="button next-step" onClick={() =>{changeOrderData({...orderData, ...data}); changeSubmit(true)}}>Złóż zamówienie</button>
                </div>
                {/* Sledzenie zamówienia po jego utworzeniu. Etap licytacji */}
            { isCreated ? <Redirect to={`/zamowienie/${id}`} /> : null } 
            </div>
        </div>
    )
}

export default Summary;