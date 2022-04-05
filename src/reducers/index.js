import CalcReducer from './CalcReducer'
import DefReducer from './DefReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    CalcReducer,
    DefReducer
});

export default rootReducer