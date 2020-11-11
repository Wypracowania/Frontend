import React from 'react';
import { useSelector } from 'react-redux';
import Steps from './steps';
import AuthenticationWrapper from '../authentication/Authentication';
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import "../../styles/newOrder.scss";
import Summary from './summary';



const NewOrder = () => {
  

  const isFirstStepVisible = useSelector(
    state => state.newOrderReducer.firstStepVisible
  );

  const isSecondStepVisible = useSelector(
    state => state.newOrderReducer.secondStepVisible
  );

  const isSummaryVisible = useSelector(
    state => state.newOrderReducer.summaryVisible
  )


  return (
    <AuthenticationWrapper>
      <div className="newOrder">
        <h2 className="newOrder_header">Zamówienie</h2>
      {isFirstStepVisible ? <Steps display="first" /> : ""}
      {isSecondStepVisible ? <Steps display="second" /> : ""}
        <div className="error-box">
          <p className="error-text"></p>
        </div>
        <div className="newOrder-box">
          <form onSubmit={ e => {e.preventDefault()}}>
            {isFirstStepVisible ? <FirstStep/> : ""}
            {isSecondStepVisible ? <SecondStep /> : ""}
            {isSummaryVisible ? <Summary /> : ""}
          </form>
      </div>
    </div>
  </AuthenticationWrapper>
  );
};

export default NewOrder;
