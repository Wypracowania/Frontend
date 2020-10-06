import React from 'react';
import styled from 'styled-components';

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
  return (
    <StyledForm action="#">
      <select name="type" id="type">
        <option value="Wypracowanie">Wypracowanie</option>
        <option value="Esej">Esej</option>
        <option value="Wiersz">Wiersz</option>
      </select>
      <input
        type="date"
        name="deadline"
        id="deadline"
        placeholder="Ustaw datę"
      />
      <input type="number" name="pages" id="pages" />
      <input type="number" name="words" id="words" />
      <select name="line" id="line">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select name="grade" id="grade">
        <option value="Wybierz tematykę">Szkoła średnia</option>
        <option value="Wiersz">Podstawówka</option>
        <option value="Esej">Studia</option>
      </select>
      _____________________________
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Wpisz temat"
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
