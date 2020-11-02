import React from "react"; 


const StepOne = (props) => (
    <div>
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
  </div>
)

export default StepOne;