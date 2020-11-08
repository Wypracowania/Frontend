import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { CancelButton } from "./cancelButton";
import "../../styles/secondStep.scss";

const SecondStep = () => {

  const [secondStepData, setData] = useState({
    instructions: "brak"
  });
  const [isSubmitted, changeSubmit] = useState(false);
  const [isFirstVisible, changeFirstVisibility] = useState(false);
  const [isValid, changeValidation] = useState(false)
  const [isVisible, changeVisibility] = useState(true);
  const dispatch = useDispatch();

  const secondStepDataUpload = ( data ) => ({ 
      type: "SECOND_STEP_SUCCESS",
      payload: data
  });

  const secondStepVisible = (bool) => ({
    type: "SECOND_STEP_VISIBLE",
    payload: bool
  })

  const firstStepVisible = (bool) => ({
    type: "FIRST_STEP_VISIBLE",
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
    if(topic.value != ""){
      changeValidation(true);
    }
  }
  }, [isSubmitted])

  useEffect(() =>{
    // If data is valid, we are hiding component and dispatching data
    dispatch(secondStepDataUpload(secondStepData));
    dispatch(secondStepVisible(isVisible));
  }, [isValid])

  useEffect(() =>{
    // Without this check we can't toggle between steps
    if(isFirstVisible === true){
      dispatch(firstStepVisible(true));
    }
  }, [isFirstVisible])

  return(
    <div>
    <div className="second-step">
      <label className="newOrder__form-label" for="topic">Temat:</label>
      <br />
        <input
          className="form-element topic"
          type="text"
          name="topic"
          id="topic"
          placeholder="Wpisz temat"
          onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}}
        />
        <br />
      <label className="newOrder__form-label" for="subject">Tematyka:</label>
      <div class="form-element">
      <select
        name="subject"
        id="subject"
        placeholder="Wybierz tematykę"
        onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}}
      >
        <option value="Wybierz tematykę">Wybierz tematykę...</option>
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
      cols="50"
      placeholder="Tutaj wpisz swoje instrukcje dotyczące zadania.
      Upewnij się, że nie zawierają żadnych osobistych informacji, jak np. nr telefonu, czy adres e-mail."
      onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}}
       />
    </div>
    <div className="second-step__buttons">
        <CancelButton/>
        <button type="button" className="button" onClick={() => {changeFirstVisibility(true); changeVisibility(false); changeValidation(true)}}>Poprzedni etap</button>
        <button type="button" className="button next-step" onClick={() => {changeSubmit(true); changeVisibility(false)}}>Przejdź dalej</button>
      </div>
    </div>
  )
} 

export default SecondStep;