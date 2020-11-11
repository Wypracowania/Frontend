import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { CancelButton } from "./cancelButton";
import "../../styles/components/firstStep.scss";

const FirstStep = () =>{

  const [firstStepData, setData] = useState({
    document: "WYP",
    category: "HUM",
    pages: 1
  });
  const [isSubmitted, changeSubmit] = useState(false);
  const [isVisible, changeVisibility] = useState(true);
  const [isValid, changeValidation] = useState(false)
  const dispatch = useDispatch();

  const firstStepDataUpload = ( data ) => ({ 
    type: "FIRST_STEP_SUCCESS",
    payload: data
  });

  const firstStepVisible = (bool) => ({
    type: "FIRST_STEP_VISIBLE",
    payload: bool
  });

  const secondStepVisible = (bool) => ({
    type: "SECOND_STEP_VISIBLE",
    payload: bool
  });

  useEffect(() =>{
    // Validation process
    if(isSubmitted === true){
    const pages = document.querySelector(".pages");
    const deadline = document.querySelector(".deadline");
    if(pages.value <= 0){
      pages.classList.add("error");
      changeSubmit(false);
    }
    else{
      pages.classList.remove("error");
    }
    if(deadline.value === ""){
      deadline.classList.add("error");
      changeSubmit(false);
    }
    else{
      deadline.classList.remove("error");
    }
    if(pages.value > 0 && deadline.value !== ""){
      changeValidation(true);
    }
  }
  }, [isSubmitted])

  useEffect(() =>{
    changeVisibility(false);
    dispatch(firstStepDataUpload(firstStepData));
    dispatch(firstStepVisible(isVisible));
    // Check if we need to change the component to the second step
      if(isVisible === false){
        dispatch(secondStepVisible(true));
      }
  }, [isValid])


  return(
    <div>
      <div className="first-step">
      <label for="type" className="newOrder__form-label">Typ:</label>
        <div class="form-element">
          <select className="newOrder__select type" name="document" id="type" onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}>
            <option value="WYP">Wypracowanie</option>
            <option value="ESE">Esej</option>
          </select>
        </div>
        <label className="newOrder__form-label" for="deadline">Deadline:</label>
        <br />
        <input
          className="form-element deadline"
          type="date"
          name="deadline"
          id="deadline"
          placeholder="Ustaw datę"
          onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}
        />
        <br />
        <label className="newOrder__form-label" for="category">Kategoria:</label>
        <div class="form-element">
        <select
          className="newOrder__select category"
          name="category"
          id="category"
          onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}
        >
          <option value="HUM">Nauki humanistyczne</option>
          <option value="PRZ">Nauki przyrodnicze</option>
          <option value="ŚCI">Nauki ścisłe</option>
        </select>
        </div>
      <label className="newOrder__form-label" for="pages">Ilość stron:</label>
      <br />
      <input
        className="form-element pages"
        type="number"
        name="pages"
        id="pages"
        onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}
      />
      </div>
      <div className="first-step__buttons">
        <CancelButton />
        <button type="button" className="button next-step" onClick={() => {changeSubmit(true); changeVisibility(false)}}>Przejdź dalej</button>
      </div>
      </div>
    )
}

export default FirstStep
