import React from "react";


const FirstStep = () =>{
    return(
        <div>
        <label for="type" className="newOrder__form-label">Typ:</label>
            <div class="form-element">
        <select className="newOrder__select" name="document" id="type" >
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
      />
      <br />
      <label className="newOrder__form-label" for="deadline">Deadline:</label>
      <input
        className="form-element"
        type="date"
        name="deadline"
        id="deadline"
        placeholder="Ustaw datę"
      />
      <label className="newOrder__form-label" for="category">Kategoria:</label>
      <div class="form-element">
      <select
        name="category"
        id="category"
      >
        <option value="PRZ">Nauki przyrodnicze</option>
        <option value="HUM">Nauki humanistyczne</option>
        <option value="ŚCI">Nauki ścisłe</option>
      </select>
      </div>
      <button>Anuluj</button>
      <button>Przejdź dalej</button>
      </div>
    )
}

export default FirstStep
