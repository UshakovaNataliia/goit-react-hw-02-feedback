import { combineReducers } from "redux";
import { ActionTypes } from "./typesSelectLang";

const reducerSelectLang = (state = "En", { type, payload }) => {
  switch (type) {
    case ActionTypes.SWITCH_LANG_EN:
      return payload.value;
    case ActionTypes.SWITCH_LANG_RU:
      return payload.value;
    default:
      return state;
  }
};

const initialState = {
  titles: {
    MAIN_TITL: "Please leave feedback",
    SECOND_TITLE: "Statistics",
  },
  buttons: {
    GOOD: "Good",
    NORMAL: "Normal",
    BAD: "Bad",
  },
  NO_FEEDBACK: "No feedback given",
};

const reducerGetLang = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_LANG_EN:
      return payload.setEn;
    case ActionTypes.GET_LANG_RU:
      return payload.setRu;
    default:
      return state;
  }
};

export default combineReducers({
  toggle: reducerSelectLang,
  langSet: reducerGetLang,
});
