import { ADD_SCOPE, UPDATE_VARIABLE } from "../constants"
var math = require('mathjs')

function recursive_items(dict, variables = {}) { // tail recursion method
    for (const [key, value] of Object.entries(dict)) {
        if (key === 'args' && dict[key] instanceof Array) {
            dict[key].forEach(elt => {
                if (elt.hasOwnProperty('name')) {
                    variables[Object.values(elt)[0]] = null
                }
                else if (elt.hasOwnProperty('content')) {
                    recursive_items(elt.content, variables)
                } else {
                    recursive_items(elt, variables)
                }
            })
        }
    }
    return variables
}

const calcReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_SCOPE:
            const mathJsExpr = action.expr; // math js expression to evaluate
            const latexExpr = math.parse(mathJsExpr).toTex() // Convert math js expression to tex
        
            const parser = math.parse(mathJsExpr) // Retrieve Abstract Syntax Tree (AST)
            const variables = recursive_items(parser) // Retrieve variables

            return {
                ...state,
                [action.scope]: {
                    'result': null,
                    'mathJsExpr': mathJsExpr,
                    'latexExpr': latexExpr,
                    'var': variables
                }
            };
        case UPDATE_VARIABLE:
            let requiredProps = action.hasOwnProperty('scope') &&
                                action.hasOwnProperty('var') &&
                                action.hasOwnProperty('val');
            if (!requiredProps) { throw 'Props requires scope, var, and val.' }
            
            let status = false;
            try {
                status = !(state[action.scope].var.hasOwnProperty(action.var))
            } catch (error) { throw `Scope ${action.scope} has not been declared!` }
            if (status) { throw `Variable ${action.var} does not exists within scope ${action.scope}!` }
            return {
                ...state,
                [action.scope]: {
                    ...state[action.scope],
                    var: {
                        ...state[action.scope].var,
                        [action.var]: action.val
                    }
                }
            }
        default:
            return state
    }
}

export default calcReducer
