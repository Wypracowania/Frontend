import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const CancelButton = () => {
    const [isClicked, changeClick] = useState(false);
    const [isRedirected, changeRedirect] = useState(false);
    const dispatch = useDispatch();
    
    const firstStepVisible = (bool) => ({
      type: "FIRST_STEP_VISIBLE",
      payload: bool
    });
    const secondStepVisible = (bool) => ({
      type: "SECOND_STEP_VISIBLE",
      payload: bool
    })
    const firstStepDataUpload = ( data ) => ({ 
      type: "FIRST_STEP_SUCCESS",
      payload: data
    });
    const secondStepDataUpload = ( data ) => ({ 
      type: "SECOND_STEP_SUCCESS",
      payload: data
    });

  useEffect(() =>{
    if(isClicked === false){
        return;
    }
    else{
        dispatch(firstStepDataUpload(""));
        dispatch(secondStepDataUpload(""));
        dispatch(firstStepVisible(true));
        dispatch(secondStepVisible(false));
    }
  }, [isClicked])


return <div><button type="button" className="button" onClick={()=>{changeClick(true); changeRedirect(true)}} >Anuluj</button>{isRedirected ? <Redirect to="/wszystkie-zamowienia" /> : ""}</div>
}