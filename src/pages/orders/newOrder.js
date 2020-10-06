import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ADD_ORDER_URL } from 'globalVariables';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px;

  & > * {
    width: 300px;
    margin-top: 40px;
  }
`;

const NewOrder = () => {
  useEffect(() => {});

  const document = useRef(null);
  const category = useRef(null);
  const topic = useRef(null);
  const pages = useRef(null);
  const deadline = useRef(null);
  const instructions = 'XXXXXXXXXXXX';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = {
      document: document.current.value,
      category: category.current.value,
      topic: topic.current.value,
      pages: +pages.current.value,
      deadline: deadline.current.value,
      instructions,
    };

    fetch(ADD_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledForm action="#" onSubmit={(e) => handleSubmit(e)}>
      <select name="type" id="type" ref={document}>
        <option value="WYP">Wypracowanie</option>
        <option value="ESE">Esej</option>
      </select>
      <select name="category" id="category" ref={category}>
        <option value="PRZ">Nauki przyrodnicze</option>
        <option value="HUM">Nauki humanistyczne</option>
        <option value="ŚCI">Nauki ścisłe</option>
      </select>
      <input
        type="date"
        name="deadline"
        id="deadline"
        placeholder="Ustaw datę"
        ref={deadline}
      />
      <input type="number" name="pages" id="pages" ref={pages} />
      <input type="number" name="words" id="words" />
      <select name="line" id="line">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select name="grade" id="grade">
        <option value="High School">Szkoła średnia</option>
        <option value="Primary School">Podstawówka</option>
        <option value="Collague">Studia</option>
      </select>
      _____________________________
      <input
        type="text"
        name="topic"
        id="topic"
        placeholder="Wpisz temat"
        ref={topic}
      />
      <select name="sources" id="sources">
        <option value="">Wybierz ilość</option>
        <option value="Internet">Internet</option>
        <option value="Wiedza">Wiedza</option>
        <option value="Książki">Książki</option>
      </select>
      <select name="stylistyka" id="stylistyka">
        <option value="">Wybierz stylistykę</option>
        <option value="Proza">Proza</option>
        <option value="Poezja">Poezja</option>
        <option value="Liryka">Liryka</option>
      </select>
      <select name="subject" id="subject" placeholder="Wybierz tematykę">
        <option value="Wybierz tematykę">Wybierz tematykę</option>
        <option value="Wiersz">Wiersz</option>
        <option value="Esej">Esej</option>
        <option value="Wypracowanie">Wypracowanie</option>
      </select>
      _____________________________
      <button type="submit">Zamów</button>
    </StyledForm>
  );
};

export default NewOrder;
