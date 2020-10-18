import React, { useState } from 'react';
import { ADD_ORDER_URL } from 'globalVariables';
import { getUsername } from 'authentication';
import { Redirect } from 'react-router-dom'

const NewOrder = () => {
  // Username for relation in database
  let initialOrder = {
    username: getUsername()
  }

  const [orderData, changeOrderData] = useState(initialOrder);
  const [isCreated, created] = useState(false);
  // returned in response when created
  const [id, setID] = useState(null);

  const handleChange = (e) => {
    changeOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(ADD_ORDER_URL, {
      method: 'POST',
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
  };
  return (
      <>
      <form onClick={ e => handleSubmit(e) } >
        <select onChange={(e) => handleChange(e)} name="document" id="type" >
          <option value="WYP">Wypracowanie</option>
          <option value="ESE">Esej</option>
        </select>
        <input
          type="number"
          name="pages"
          id="pages"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="words"
          id="words"
          onChange={(e) => handleChange(e)}
        />
        <select name="line" id="line" onChange={(e) => handleChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <select
          name="subject"
          id="subject"
          placeholder="Wybierz tematykę"
          onChange={(e) => handleChange(e)}
        >
          <option value="Wybierz tematykę">Wybierz tematykę</option>
          <option value="Wiersz">Wiersz</option>
          <option value="Esej">Esej</option>
          <option value="Wypracowanie">Wypracowanie</option>
        </select>
        <select name="grade" id="grade" onChange={(e) => handleChange(e)}>
          <option value="High School">Szkoła średnia</option>
          <option value="Primary School">Podstawówka</option>
          <option value="Collague">Studia</option>
        </select>
        <br />
        <input
          type="date"
          name="deadline"
          id="deadline"
          placeholder="Ustaw datę"
          onChange={(e) => handleChange(e)}
        />
        <select
          name="category"
          id="category"
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
        />
        <br />
        <select
          name="sources"
          id="sources"
          onChange={(e) => handleChange(e)}
        >
          <option value="">Wybierz ilość</option>
          <option value="Internet">Internet</option>
          <option value="Wiedza">Wiedza</option>
          <option value="Książki">Książki</option>
        </select>
        <br />
        <select
          name="subject"
          id="subject"
          placeholder="Wybierz tematykę"
          onChange={(e) => handleChange(e)}
        >
          <option value="Wybierz tematykę">Wybierz tematykę</option>
          <option value="Wiersz">Wiersz</option>
          <option value="Esej">Esej</option>
          <option value="Wypracowanie">Wypracowanie</option>
        </select>
        <br />
        <textarea name="instructions" onChange={(e) => handleChange(e)} />
        <button type="submit">Zamów</button>
      </form>
      {/* Sledzenie zamówienia po jego utworzeniu. Etap licytacji */}
      { isCreated ? <Redirect to={`/zamowienie/${id}`} /> : null } 
    </>
  );
};

export default NewOrder;
