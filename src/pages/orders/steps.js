import React, { useEffect } from "react";
import "../../styles/components/steps.scss";

const Steps = (props) =>{

    useEffect(() => {
        const stepDisplay = props.display;
        const firstBox = document.querySelector(".first");
        const secondBox = document.querySelector(".second");
        const thirdBox = document.querySelector(".third");

        switch(stepDisplay){
            case "first":
                firstBox.classList.add("active"); break;
            case "second":
                secondBox.classList.add("active"); break;
        }
    })

    return(
        <div>        
            <div className="steps">
            <div className="step-box first">
                <span className="step-number">
                    1
                </span>
            </div>
            
            <div className="step-box second">
                <span className="step-number">
                    2
                </span>
            </div>
        </div>
        <div className="steps-description">
            <span>Szczegóły</span>
            <span>Instrukcja</span>
         </div>
       </div> 
    )
}

export default Steps;