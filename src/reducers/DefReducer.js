import { ADD_TERM } from "../constants";


/**
 * DefReducer part of react redux store for MathTerm module. 
 * Has 1 switch case for adding definitions.
*/
const DefReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_TERM:
            let requiredProps = action.hasOwnProperty('id') &&
                                action.hasOwnProperty('def');
            if (!requiredProps) { console.error('Props requires id and def') }
            return {
                ...state,
                [action.id]: action.def
            };
        default:
            return state
    }
}

export default DefReducer