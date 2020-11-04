import React from "react";
import "../../styles/steps.scss";

const Steps = (props) =>{
    return(
        <div>        
            <div className="steps">
            <div className="step-box">
                <span className="step-number active">
                    1
                </span>
            </div>
            
            <div className="step-box">
                <span className="step-number">
                    2
                </span>
            </div>
            <div className="step-box">
                <span className="step-number">
                    3
                </span>
            </div>
        </div>
        <div className="steps-description">
            <span>Szczegóły</span>
            <span>Instrukcja</span>
            <span>Dodaj pliki</span>
         </div>
       </div> 
    )
}

export default Steps;