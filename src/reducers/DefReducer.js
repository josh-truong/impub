import { ADD_TERM } from "../constants";


/**
 * DefReducer part of react redux store for MathTerm module. 
 * Has 1 switch case for adding definitions.
*/
const DefReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_TERM:
            let requiredProps = action.hasOwnProperty('term_name') &&
                                action.hasOwnProperty('term_id') &&
                                action.hasOwnProperty('def');
            if (!requiredProps) { console.error('Props requires term_name, term_id and def') }

            return {
                ...state,
                [action.term_name]: {
                    ...state[action.term_name],
                    [action.term_id]:[action.def]
                }
            };
        default:
            return state
    }
}

export default DefReducer