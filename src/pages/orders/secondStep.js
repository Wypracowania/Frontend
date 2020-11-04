import React from "react";


const SecondStep = () => {
    return(
        <div>
        <label className="newOrder__form-label" for="topic">Temat:</label>
      <input
        className="form-element"
        type="text"
        name="topic"
        id="topic"
        placeholder="Wpisz temat"
      />
      <br />
      <label className="newOrder__form-label" for="subject">Tematyka:</label>
      <div class="form-element">
      <select
        name="subject"
        id="subject"
        placeholder="Wybierz tematykę"
      >
        <option value="Wybierz tematykę">Wybierz tematykę</option>
        <option value="Wiersz">Wiersz</option>
        <option value="Esej">Esej</option>
        <option value="Wypracowanie">Wypracowanie</option>
      </select>
      </div>
      <br />
      <label className="newOrder__form-label" for="instructions">Instrukcje:</label>
      <textarea className="form-element" name="instructions" rows="10" cols="50" />
        </div>
    )
} 

export default SecondStep;