import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

export const CancelButton = () => {
    const [isClicked, changeClick] = useState(false);
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
        dispatch(secondStepVisible(false));
        dispatch(firstStepVisible(true));
        dispatch(firstStepDataUpload({}));
        dispatch(secondStepDataUpload({}));
    }
  }, [isClicked])

  return <button type="button" className="button" onClick={()=>{changeClick(true)}} >Anuluj</button>
}