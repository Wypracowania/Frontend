// eslint-disable-next-line import/prefer-default-export
export function firstStepData(data) {
    return {
        type: 'FIRST_STEP_SUCCESS',
        payload: data
    }
}

export function secondStepData(data) {
    return {
        type: 'SECOND_STEP_SUCCESS',
        payload: data
    }
}

export function firstStepVisible(bool) {
    return {
        type: 'FIRST_STEP_VISIBLE',
        payload: bool
    }
}

export function secondStepVisible(bool){
    return{
        type: 'SECOND_STEP_VISIBLE',
        payload: bool
    }
}

export function summaryVisible(bool){
    return{
        type: 'SUMMARY_VISIBLE',
        payload: bool
    }
}