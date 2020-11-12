import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { CancelButton } from "./cancelButton";
import "../../styles/components/secondStep.scss";

const SecondStep = (props) => {

  const [secondStepData, setData] = useState(props.secondStepData || {
    subject: "lektury szkolne",
    instructions: "brak"
  });
  const [isSubmitted, changeSubmit] = useState(false);
  const [isFirstVisible, changeFirstVisibility] = useState(false);
  const [isValid, changeValidation] = useState(false)
  const [isVisible, changeVisibility] = useState(false);
  const dispatch = useDispatch();

  const secondStepDataUpload = ( data ) => ({ 
      type: "SECOND_STEP_SUCCESS",
      payload: data
  });

  const firstStepVisible = (bool) => ({
    type: "FIRST_STEP_VISIBLE",
    payload: bool
  })

  const secondStepVisible = (bool) => ({
    type: "SECOND_STEP_VISIBLE",
    payload: bool
  })

  const summaryVisible = (bool) => ({
    type: 'SUMMARY_VISIBLE',
    payload: bool
  })

  useEffect(() =>{
    // Check if provided data is valid
    if(isSubmitted === true){
    const topic = document.querySelector(".topic");
    if(topic.value === ""){
      topic.classList.add("error");
      changeSubmit(false);
    }
    else{
      topic.classList.remove("error");
    }
    if(topic.value !== ""){
      changeValidation(true);
    }
  }
  }, [isSubmitted])

  useEffect(() =>{
    // If data is valid, we are hiding component and dispatching data
    if(isValid === true){
      dispatch(secondStepDataUpload(secondStepData));
      dispatch(secondStepVisible(isVisible));
      dispatch(summaryVisible(true));
      changeValidation(false);
      changeSubmit(false);
    }
  }, [isValid])

  useEffect(() =>{
    // Without this check we can't toggle between steps
    if(isFirstVisible === true){
      dispatch(firstStepVisible(true));
      dispatch(secondStepVisible(isVisible));
    }
  }, [isFirstVisible])

  return(
    <div className="step-container">
      <div className="second-step step">
        <label className="newOrder__form-label" for="topic">Temat:</label>
        <br />
          <input
            className="form-element topic"
            type="text"
            name="topic"
            id="topic"
            defaultValue={secondStepData.topic}
            onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}}
          />
          <br />
        <label className="newOrder__form-label" for="subject">Tematyka:</label>
        <div class="form-element">
        <select
          name="subject"
          id="subject"
          defaultValue={secondStepData.subject}
          onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}}
        >
          <option value="Lektury szkolne">Lektury szkolne</option>
          <option value="Nauki ścisłe">Nauki ścisłe</option>
          <option value="Nauki biologiczne">Nauki biologiczne</option>
        </select>
        </div>
        <label className="newOrder__form-label" for="instructions">Instrukcje:</label>
        <br />
        <textarea 
        className="form-element text-area" 
        name="instructions" 
        rows="10" 
        cols="40"
        defaultValue={secondStepData.instructions}
        placeholder="Tutaj wpisz swoje instrukcje dotyczące zadania.
        Upewnij się, że nie zawierają żadnych osobistych informacji, jak np. nr telefonu, czy adres e-mail."
        onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}}
        />
      </div>
      <div className="second-step__buttons">
          <CancelButton/>
          <button type="button" className="button" onClick={() => {changeFirstVisibility(true); changeVisibility(false)}}>Poprzedni etap</button>
          <button type="button" className="button next-step" onClick={() => {changeSubmit(true); changeVisibility(true)}}>Przejdź dalej</button>
      </div>
    </div>
  )
} 

export default SecondStep;