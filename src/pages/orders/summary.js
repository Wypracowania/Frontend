import React from "react"; 
import "../../styles/components/summary.scss";


const Summary = (props) => {

    return(
        <div className="summary">
            <h2>Potwierdź zamówienie</h2>
            <h3>Potwierdź szczegóły zamówienia:</h3>
            <p>Tytuł: {props.secondStepData.topic}</p>
            <p>Deadline: {props.firstStepData.deadline}</p>
            <p>Strony: {props.firstStepData.pages}</p>
        </div>
    )
}

export default Summary;