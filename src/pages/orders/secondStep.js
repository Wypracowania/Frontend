import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import "../../styles/secondStep.scss";

const SecondStep = () => {

  const [secondStepData, setData] = useState({});
  const [isSubmitted, changeSubmit] = useState(false);
  const [isFirstVisible, changeFirstVisibility] = useState(false);
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
    dispatch(secondStepDataUpload(secondStepData));
    dispatch(secondStepVisible(isVisible));
  }, [isVisible])

  useEffect(() =>{
    if(isFirstVisible === true){
      dispatch(firstStepVisible(true));
    }
  }, [isFirstVisible])

  return(
    <div className="second-step">
      <label className="newOrder__form-label" for="topic">Temat:</label>
      <br />
        <input
          className="form-element"
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
        <option value="Wybierz tematykę">Wybierz tematykę</option>
        <option value="Wiersz">Wiersz</option>
        <option value="Esej">Esej</option>
        <option value="Wypracowanie">Wypracowanie</option>
      </select>
      </div>
      <label className="newOrder__form-label" for="instructions">Instrukcje:</label>
      <br />
      <textarea className="form-element text-area" name="instructions" rows="10" cols="50"
      onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}} />
      <div className="second-step__buttons">
        <button type="button" className="button">Anuluj</button>
        <button type="button" className="button" onClick={() => {changeFirstVisibility(true); changeVisibility(false)}}>Poprzedni etap</button>
        <button type="button" className="button next-step" onClick={() => {changeSubmit(true); changeVisibility(false)}}>Przejdź dalej</button>
      </div>
    </div>
  )
} 

export default SecondStep;