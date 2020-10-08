import React, { useEffect, useState } from 'react';
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

  const initialOrderData = {
    document: 'ESE',
    category: 'PRZ',
    topic: 'Bioinformatyka w biomedycynie',
    pages: 1,
    deadline: '2020-10-04',
    instructions: 'xxxxxxxx',
  };

  const [orderData, changeOrderData] = useState(initialOrderData);

  const handleChange = (e) => {
    changeOrderData({ ...orderData, [e.target.name]: e.target.value });
    console.log(orderData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);

    fetch(ADD_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify(orderData),
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

  // const First = () => {
  //   return (
  //     <>

  //     </>
  //   );
  // };

  // const Second = () => {
  //   return (
  //     <>

  //     </>
  //   );
  // };

  return (
    <>
      <Headline>Zamówienie 00001 (Szkic)</Headline>
      <MultiStepForm.Wizard>
        <MultiStepForm.ProgressBar />
        <StyledNewOrderPageWindow>
          <StyledForm action="#" onSubmit={(e) => handleSubmit(e)}>
            <MultiStepForm.View viewIndex={1}>
              {/* ------------------------------------------------ */}
              <select
                name="document"
                id="type"
                onChange={(e) => handleChange(e)}
              >
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
              {/* ------------------------------------------------ */}
            </MultiStepForm.View>
            <MultiStepForm.View viewIndex={2}>
              {/* ------------------------------------------------ */}
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
              <select
                name="stylistyka"
                id="stylistyka"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Wybierz stylistykę</option>
                <option value="Proza">Proza</option>
                <option value="Poezja">Poezja</option>
                <option value="Liryka">Liryka</option>
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
              {/* ------------------------------------------------ */}
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
