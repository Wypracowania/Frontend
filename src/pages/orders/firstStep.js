import React, { useState } from "react";
import { useDispatch } from 'react-redux';

const FirstStep = () =>{




  const [firstStepData, setData] = useState({});
  const dispatch = useDispatch();

  const firstStepDataUpload = ( data ) => ({ 
    type: "FIRST_STEP_SUCCESS",
    payload: data
  });


    const dropit = () =>{
      dispatch(firstStepDataUpload(firstStepData)) 
    } 




    return(
        <div>
        <label for="type" className="newOrder__form-label">Typ:</label>
            <div class="form-element">
        <select className="newOrder__select" name="document" id="type" onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}>
        <option value="WYP">Wypracowanie</option>
        <option value="ESE">Esej</option>
      </select>
      </div>
      <label className="newOrder__form-label" for="pages">Ilość stron:</label>
      <input
        className="form-element"
        type="number"
        name="pages"
        id="pages"
        onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}
      />
      <br />
      <label className="newOrder__form-label" for="deadline">Deadline:</label>
      <input
        className="form-element"
        type="date"
        name="deadline"
        id="deadline"
        placeholder="Ustaw datę"
        onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}
      />
      <label className="newOrder__form-label" for="category">Kategoria:</label>
      <div class="form-element">
      <select
        name="category"
        id="category"
        onChange={(e) => {setData({ ...firstStepData, [e.target.name]: e.target.value })}}
      >
        <option value="PRZ">Nauki przyrodnicze</option>
        <option value="HUM">Nauki humanistyczne</option>
        <option value="ŚCI">Nauki ścisłe</option>
      </select>
      </div>
      <div>
        <button className="button">Anuluj</button>
        <button className="button next-step" onClick={() => {dropit()}}>Przejdź dalej</button>
      </div>
      </div>
    )
}

export default FirstStep
