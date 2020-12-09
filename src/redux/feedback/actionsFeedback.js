import {ActionTypes} from '../actionTypes/feedbackTypes';


export const addGood = () => ({
    type: ActionTypes.ADD_GOOD,
    payload: {
        value: 1
    }
})

export const addNormal = () => ({
    type: ActionTypes.ADD_NORMAL,
    payload: {
        value: 1
    }
})

export const addBad = () => ({
    type: ActionTypes.ADD_BAD,
    payload: {
        value: 1
    }
})