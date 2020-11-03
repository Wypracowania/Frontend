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