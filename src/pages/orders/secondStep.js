import React, { useState } from "react";
import { useDispatch } from 'react-redux';


const SecondStep = () => {
  const [secondStepData, setData] = useState({});

  const dispatch = useDispatch();

  const secondStepDataUpload = ( data ) => ({ 
      type: "SECOND_STEP_SUCCESS",
      payload: data
  });


  const dropit = () =>{
    dispatch(secondStepDataUpload(secondStepData)) 
  } 


  return(
        <div>
        <label className="newOrder__form-label" for="topic">Temat:</label>
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
      <br />
      <label className="newOrder__form-label" for="instructions">Instrukcje:</label>
      <textarea className="form-element" name="instructions" rows="10" cols="50"
      onChange={(e) => {setData({ ...secondStepData, [e.target.name]: e.target.value })}} />
      <div>
        <button className="button">Anuluj</button>
        <button className="button next-step" onClick={() => {dropit()}}>Przejdź dalej</button>
      </div>
      </div>
  )
} 

export default SecondStep;