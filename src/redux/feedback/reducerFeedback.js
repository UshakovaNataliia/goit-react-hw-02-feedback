import {combineReducers} from 'redux';
import {ActionTypes} from '../actionTypes/feedbackTypes';


// export const reducerFeedback = (state = initialState, action) => {
//   // {type, payload}
//   switch (action.type) {
//     case "ADD_GOOD":
//       return { ...state, good: state.good + action.payload.value };
//     case "ADD_NORMAL":
//       return { ...state, normal: state.normal + action.payload.value };
//       case "ADD_BAD":
//         return { ...state, bad: state.bad + action.payload.value };
//     default:
//       return state;
//   }
// };

const reducerAddGood = (state = 0, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_GOOD:
            return state + payload.value;
        default:
            return state;
    }
}

const reducerAddNormal = (state = 0, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_NORMAL:
            return state + payload.value;
        default:
            return state;
    }
}

const reducerAddBad = (state = 0, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_BAD:
            return state + payload.value;
        default:
            return state;
    }
}

const reducerFeedback = combineReducers({
    good: reducerAddGood,
    normal: reducerAddNormal,
    bad: reducerAddBad,
})

export default reducerFeedback;