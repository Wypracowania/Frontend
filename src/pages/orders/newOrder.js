import React, { useEffect, useState } from 'react';
import { ADD_ORDER_URL } from 'globalVariables';
import { getUsername } from 'authentication';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


// Przykład użycia redux dla jednego komponentu, do drugiego musisz nieco pozmieniać nazwy ;)

const firstStepDataUpload = ( data ) => ({ 
  type: "FIRST_STEP_SUCCESS",
  // Tutaj przekazujesz obiekt danych z zamówienia (etapu 1)
  payload: data
  // 
});

// Tutaj możesz odczytać co masz w globalnym stanie (poprzez użycie tej funkcji)
  const firstStepData = useSelector(
    state => state.firstStep
  );

// Aby zmienić stan globalny, użyj dispatch(firstStepDataUpload)
const dispatch = useDispatch()



const NewOrder = () => {

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
      <div>
      <form onSubmit={ e => {e.preventDefault(); changeSubmit(true)} } >
        <select onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}} name="document" id="type" >
          <option value="WYP">Wypracowanie</option>
          <option value="ESE">Esej</option>
        </select>
        <input
          type="number"
          name="pages"
          id="pages"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        />
        <br />
        <input
          type="date"
          name="deadline"
          id="deadline"
          placeholder="Ustaw datę"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        />
        <select
          name="category"
          id="category"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        >
          <option value="PRZ">Nauki przyrodnicze</option>
          <option value="HUM">Nauki humanistyczne</option>
          <option value="ŚCI">Nauki ścisłe</option>
        </select>
        <input
          type="text"
          name="topic"
          id="topic"
          placeholder="Wpisz temat"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        />
        <br />
        <select
          name="subject"
          id="subject"
          placeholder="Wybierz tematykę"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        >
          <option value="Wybierz tematykę">Wybierz tematykę</option>
          <option value="Wiersz">Wiersz</option>
          <option value="Esej">Esej</option>
          <option value="Wypracowanie">Wypracowanie</option>
        </select>
        <br />
        <textarea name="instructions" rows="10" cols="50" onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}} />
        <button type="submit">Zamów</button>
      </form>
      {/* Sledzenie zamówienia po jego utworzeniu. Etap licytacji */}
      { isCreated ? <Redirect to={`/zamowienie/${id}`} /> : null } 
    </div>
  );
};

export default NewOrder
