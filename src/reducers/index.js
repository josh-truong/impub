import calcReducer from './calculator'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    calcReducer
});

export default rootReducer