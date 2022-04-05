import { ADD_TERM } from "../constants";

const DefReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_TERM:
            let requiredProps = action.hasOwnProperty('id') &&
                                action.hasOwnProperty('def');
            if (!requiredProps) { throw 'Props requires id and def' }
            return {
                ...state,
                [action.id]: action.def
            };
        default:
            return state
    }
}

export default DefReducer