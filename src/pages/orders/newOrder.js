import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ADD_ORDER_URL } from 'globalVariables';
import Headline from 'components/Header/Headline';
import PageWindow from 'components/PageWindow/PageWindow';
import * as MultiStepForm from 'components/MultiStepForm/MultiStepForm';
import HeadButton from 'components/HeadButton/HeadButton';

const StyledForm = styled.form`
  & > * {
    width: 150px;
    margin-bottom: 40px;
    margin-left: 20px;
  }
`;

const StyledNewOrderPageWindow = styled(PageWindow)`
  padding: 40px 50px;
`;

const StyledNavFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ResetButton = styled(HeadButton)`
  background-color: #e5e6ea;
  color: #676c7d;
  border: solid 1px #676c7d;
  padding: 10px 30px;
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

  const First = () => {
    return (
      <>
        <select name="type" id="type" ref={document}>
          <option value="WYP">Wypracowanie</option>
          <option value="ESE">Esej</option>
        </select>
        <input type="number" name="pages" id="pages" ref={pages} />
        <input type="number" name="words" id="words" />
        <select name="line" id="line">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <select name="subject" id="subject" placeholder="Wybierz tematykę">
          <option value="Wybierz tematykę">Wybierz tematykę</option>
          <option value="Wiersz">Wiersz</option>
          <option value="Esej">Esej</option>
          <option value="Wypracowanie">Wypracowanie</option>
        </select>
        <select name="grade" id="grade">
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
          ref={deadline}
        />
        <select name="category" id="category" ref={category}>
          <option value="PRZ">Nauki przyrodnicze</option>
          <option value="HUM">Nauki humanistyczne</option>
          <option value="ŚCI">Nauki ścisłe</option>
        </select>
      </>
    );
  };

  const Second = () => {
    return (
      <>
        <input
          type="text"
          name="topic"
          id="topic"
          placeholder="Wpisz temat"
          ref={topic}
        />
        <br />
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
        <br />
        <select name="subject" id="subject" placeholder="Wybierz tematykę">
          <option value="Wybierz tematykę">Wybierz tematykę</option>
          <option value="Wiersz">Wiersz</option>
          <option value="Esej">Esej</option>
          <option value="Wypracowanie">Wypracowanie</option>
        </select>
        <br />
        <textarea />
      </>
    );
  };

  return (
    <>
      <Headline>Zamówienie 00001 (Szkic)</Headline>
      <MultiStepForm.Wizard>
        <MultiStepForm.ProgressBar />
        <StyledNewOrderPageWindow>
          <StyledForm action="#" onSubmit={(e) => handleSubmit(e)}>
            <MultiStepForm.View viewIndex={1}>
              <First />
            </MultiStepForm.View>
            <MultiStepForm.View viewIndex={2}>
              <Second />
            </MultiStepForm.View>
            <MultiStepForm.View viewIndex={3}>asd</MultiStepForm.View>
            <button type="submit">Zamów</button>
          </StyledForm>
        </StyledNewOrderPageWindow>
        <StyledNavFooter>
          <ResetButton>Porzuć szkic</ResetButton>
          <MultiStepForm.Controls />
        </StyledNavFooter>
      </MultiStepForm.Wizard>
    </>
  );
};

export default NewOrder;
