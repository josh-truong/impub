import EvalReducer from './EvalReducer'
import DefReducer from './DefReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    EvalReducer,
    DefReducer
});

export default rootReducer