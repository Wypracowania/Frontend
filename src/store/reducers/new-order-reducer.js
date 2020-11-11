// eslint-disable-next-line import/prefer-default-export
const initialState = {
    firstStep: {},
    secondStep: {},
    firstStepVisible: true,
    secondStepVisible: false
}

// eslint-disable-next-line import/prefer-default-export
export function newOrderReducer(state = initialState, action) { 
    switch (action.type) { 

        case 'FIRST_STEP_SUCCESS':
            return {
                ...state,
                firstStep: action.payload
            }

        case 'SECOND_STEP_SUCCESS':
            return {
                ...state,
                secondStep: action.payload
            }
        case 'FIRST_STEP_VISIBLE':
            return{
                ...state,
                firstStepVisible: action.payload
            }
        case 'SECOND_STEP_VISIBLE':
            return{
                ...state,
                secondStepVisible: action.payload
            }
        default:
            return state 
    }
}

