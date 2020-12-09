import {createStore, combineReducers} from 'redux';
import reducerFeedback from '../feedback/reducerFeedback';
import reducerSelectLang from '../selectLang/reducerSelectLang';



const reducer = combineReducers({
    feedback: reducerFeedback,
    selectLang: reducerSelectLang,
}) 


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;