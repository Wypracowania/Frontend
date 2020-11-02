import React, { useEffect, useState } from 'react';
import { ADD_ORDER_URL } from 'globalVariables';
import { getUsername } from 'authentication';
import { Redirect } from 'react-router-dom';
import "../../styles/newOrder.scss";


const NewOrder = () => {
  // Username for relation in database
  let initialOrder = {
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
    else{
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
  }
  changeSubmit(false);
  }, [isSubmited])

  return (
      <div className="newOrder">
      <form onSubmit={ e => {e.preventDefault(); changeSubmit(true)} } >
      <label for="type" className="newOrder__form-label">Typ:</label>
      <div class="form-element">
        <select className="newOrder__select" onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}} name="document" id="type" >
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
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        />
        <br />
        <label className="newOrder__form-label" for="deadline">Deadline:</label>
        <input
          className="form-element"
          type="date"
          name="deadline"
          id="deadline"
          placeholder="Ustaw datę"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        />
        <label className="newOrder__form-label" for="category">Kategoria:</label>
        <div class="form-element">
        <select
          name="category"
          id="category"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        >
          <option value="PRZ">Nauki przyrodnicze</option>
          <option value="HUM">Nauki humanistyczne</option>
          <option value="ŚCI">Nauki ścisłe</option>
        </select>
        </div>
        <label className="newOrder__form-label" for="topic">Temat:</label>
        <input
          className="form-element"
          type="text"
          name="topic"
          id="topic"
          placeholder="Wpisz temat"
          onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}}
        />
        <br />
        <label className="newOrder__form-label" for="subject">Tematyka:</label>
        <div class="form-element">
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
        </div>
        <br />
        <label className="newOrder__form-label" for="instructions">Instrukcje:</label>
        <textarea className="form-element" name="instructions" rows="10" cols="50" onChange={(e) => {changeOrderData({ ...orderData, [e.target.name]: e.target.value })}} />
        <button type="submit">Zamów</button>
      </form>
      {/* Sledzenie zamówienia po jego utworzeniu. Etap licytacji */}
      { isCreated ? <Redirect to={`/zamowienie/${id}`} /> : null } 
    </div>
  );
};

export default NewOrder;
